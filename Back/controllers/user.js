'use strict'

var User = require('../models/user');
var Anime = require('../models/anime');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var controller = {

    saveUser: async function (req, res) {
        console.log("Datos recibidos:", req.body);
        var params = req.body;
        try {
            const { name, password } = req.body;

            // Verifica que tanto el nombre como la contraseña sean cadenas válidas y no estén vacías
            if (!name || !password || typeof name !== 'string' || typeof password !== 'string' || name.trim() === '' || password.trim() === '') {
                return res.status(400).json({ error: "Nombre de usuario o contraseña inválidos" });
            }

            // Verifica si el nombre de usuario ya existe en la base de datos
            const existingUser = await User.findOne({ name });
            if (existingUser) {
                return res.status(409).json({ error: "Nombre de usuario ya existe" });
            }

            // Hashea la contraseña antes de almacenarla en la base de datos
            const hashedPassword = await bcrypt.hash(password, 10);

            // Crea un nuevo usuario en la base de datos
            const newUser = await User.create({ name, password: hashedPassword });

            // Devuelve una respuesta exitosa con el token de autenticación
            res.json({ message: "Usuario registrado correctamente", token: createToken(newUser) });
        } catch (error) {
            // Maneja los errores y devuelve una respuesta de error
            res.status(500).json({ error: error.message });
        }
    },
    authenticationUser: async function (req, res) {
        const { name, password } = req.body;

        User.findOne({ name }).then((user1, err) => {
            if (err) {
                return res.status(500).send({ error: 'Error al autenticar al usuario' });
            } else if (!user1) {
                return res.status(500).send({ error: 'El usuario no existe' });
            } else {
                user1.isCorrectPassword(password, (err, result) => {
                    if (err) {
                        return res.status(500).send({ error: 'Error al autenticar' });
                    } else if (result) {
                        //res.json(user1);
                        res.status(200).send({ message: 'Usuario autenticado correctamente', token: createToken(user1) });
                    } else {
                        res.status(500).send({ error: 'Usuario y/o contraseña incorrecta' });
                    }
                })
            }
        })
    },
    getAnimesFavoritesUser: async function (req, res) {
        const userId = req.params.id; // Suponiendo que el ID de usuario está en los parámetros de la URL
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'ID de usuario inválido' });
        }
        try {
            // Obtén el usuario por su ID y selecciona los IDs de los animes favoritos
            const user = await User.findById(userId).select('favorite');

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            // Obtén los detalles de los animes favoritos usando los IDs almacenados en user.favorite
            const favoriteAnimeDetails = await Anime.find({ _id: { $in: user.favorite } });

            return res.status(200).json(favoriteAnimeDetails);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al obtener los animes favoritos' });
        }
    },

    getUser: function (req, res) {  //Para traer un dato de la base de datos
        var userName = req.params.name;

        if (userName == null) return res.status(404).send({ message: 'El proyecto no existe' });

        User.findOne({ name: userName }).then((usuario) => {

            if (!usuario) return res.status(404).send({ message: 'El proyecto no existe' });

            return res.status(200).send({ message: "Objeto obtenido", user: usuario });

        })
            .catch((error) => {

                if (error) return res.status(500).send({ message: 'Error al devolver los datos' });

            });
    },


    addFavoriteAnime: async function (req, res) {
        const { userId, animeId } = req.body;
        var oli = false;
        try {
            console.log(`Finding user with ID: ${userId}`);
            const user = await User.findById(userId);
            console.log(`Found user: ${user}`);

            console.log(`Finding anime with ID: ${animeId}`);
            const anime = await Anime.findById(animeId);
            console.log(`Found anime: ${anime}`);

            if (!user || !anime) {
                return res.status(404).json({ message: 'User or Anime not found' });
            }

            // Verificar si el anime ya está en la lista de favoritos del usuario
            const index = user.favorite.indexOf(animeId);

            if (index !== -1) {
                // Si el anime está en la lista, eliminarlo
                user.favorite.splice(index, 1);
                await user.save();
                return res.status(200).json({ message: 'Anime removed from favorites' });
            } else {
                // Si el anime no está en la lista, agregarlo
                user.favorite.push(animeId);
                await user.save();
                return res.status(200).json({ message: 'Anime added to favorites' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error: error.toString() });
        }
    },
    checkFavoriteAnime: async function (req, res) {
        const { userId, animeId } = req.params;

        try {
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Verifica si el anime está en la lista de favoritos del usuario
            const index = user.favorite.indexOf(animeId);

            if (index !== -1) {
                // Si el anime está en la lista, envía un mensaje indicando que está en favoritos
                return res.status(200).json({ message: 'Anime found in favorites' });
            } else {
                // Si el anime no está en la lista, envía un mensaje indicando que no está en favoritos
                return res.status(404).json({ message: 'Anime not found in favorites' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error: error.toString() });
        }
    },
   
    getUsersFavorites: async function (req, res) {
        try {
            const users = await User.find({}).populate('favorite', 'name description category');

            if (!users || users.length === 0) {
                return res.status(404).json({ message: 'No users found or no favorites available.' });
            }

            // Crear un array para almacenar todos los animes favoritos de todos los usuarios
            let allFavorites = [];

            // Iterar sobre los usuarios y agregar sus favoritos al array
            users.forEach(user => {
                if (user.favorite && user.favorite.length > 0) {
                    allFavorites = allFavorites.concat(user.favorite);
                }
            });

            // allFavorites ahora contendrá los detalles completos de todos los animes favoritos
            res.status(200).json(allFavorites);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error: error.toString() });
        }
    },
    removeFavoriteAnime: async function (req, res) {
        const { userId, animeId } = req.body;

        try {
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Verifica si el anime está en la lista de favoritos del usuario
            const index = user.favorite.indexOf(animeId);

            if (index !== -1) {
                // Si el anime está en la lista, elimínalo
                user.favorite.splice(index, 1);
                await user.save();
                return res.status(200).json({ message: 'Anime removed from favorites' });
            } else {
                // Si el anime no está en la lista, envía un mensaje indicando que no se encontró en favoritos
                return res.status(404).json({ message: 'Anime not found in favorites' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error: error.toString() });
        }
    },
    updateUserName: async function (req, res) {
        const { userId, newUserName, password } = req.body;
    
        try {
            // Encuentra el usuario por su ID
            const user = await User.findById(userId);
    
            // Verifica si el usuario existe
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
    
            // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
            // Si la contraseña es incorrecta, devuelve un error
            if (!isPasswordCorrect) {
                return res.status(401).json({ error: 'Contraseña incorrecta' });
            }
    
            // Verifica si el nuevo nombre de usuario ya existe en la base de datos
            const existingUser = await User.findOne({ name: newUserName });
    
            if (existingUser) {
                return res.status(409).json({ error: "El nuevo nombre de usuario ya está en uso" });
            }
    
            // Actualiza el nombre de usuario
            user.name = newUserName;
            await user.save();
    
            // Genera un nuevo token
            const newToken = createToken(user);
    
            // Devuelve el nuevo token junto con otros datos necesarios
            res.status(200).json({ message: 'Nombre de usuario actualizado correctamente', user, token: newToken });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el nombre de usuario', error: error.toString() });
        }
    },
    updatePassword: async function (req, res) {
        const { userId, currentPassword, newPassword, confirmPassword } = req.body;

        try {
            // Encuentra el usuario por su ID
            const user = await User.findById(userId);

            // Verifica si el usuario existe
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
            const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);

            // Si la contraseña actual es incorrecta, devuelve un error
            if (!isPasswordCorrect) {
                return res.status(401).json({ error: 'Contraseña actual incorrecta' });
            }

            // Verifica que la nueva contraseña y la confirmación coincidan
            if (newPassword !== confirmPassword) {
                return res.status(400).json({ error: 'La nueva contraseña y la confirmación no coinciden' });
            }

            // Hashea la nueva contraseña antes de almacenarla en la base de datos
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Actualiza la contraseña del usuario y guarda el usuario modificado en la base de datos
            user.password = hashedPassword;
            await user.save();

            res.status(200).json({ message: 'Contraseña actualizada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar la contraseña', error: error.toString() });
        }
    }
};



function createToken(user) {
    const payload = {
        id: user.id,
        name: user.name
    }
    return jwt.sign(payload, 'Hola mundo');

}

module.exports = controller;