'use strict'

var Anime = require('../models/anime');
const fs = require('fs');
const path = require('path');
const axios = require('axios');


var controller = {

  saveAnime: async function (req, res) {
    const { name, year, description, category, type } = req.body;
    const newImage = {
      name: name,
      description: description,
      category: category,
      type: type,
      year: year,
      image: req.file.path
    };
    const anime = new Anime(newImage);
    await anime.save();


    return res.json({ message: "Imagen guardada", anime })
  },


  getAnime: function (req, res) {  //Para traer un dato de la base de datos
    var animeName = req.params.name;

    if (animeName == null) return res.status(404).send({ message: 'El proyecto no existe' });

    Anime.findOne({ name: animeName }).then((animes) => {

      if (!animes) return res.status(404).send({ message: 'El proyecto no existe' });

      return res.status(200).send({ message: "Objeto obtenido", anime: animes });

    })
      .catch((error) => {

        if (error) return res.status(500).send({ message: 'Error al devolver los datos' });

      });
  },


  getAnimes: function (req, res) { //Para consultar todos los objetos de la base de datos(Listar)
    var animeCategory = req.params.category;

    Anime.find({ category: animeCategory }).then((animes) => {
      if (!animes || animes.length === 0) return res.status(404).send({ message: 'No hay objetos que mostrar' });

      return res.status(200).send({ message: "Objeto obtenido", animes });
    })
      .catch((error) => {
        if (error) return res.status(500).send({ message: 'Error al devolver los datos' });
      });

  },
  getAllAnimes: function (req, res) { //Para consultar todos los objetos de la base de datos(Listar)

    Anime.find({}).sort('name').then((animes) => {  //Sort para ordenar 

      if (!animes) return res.status(404).send({ message: 'No hay objetos que mostrar' });

      return res.status(200).send({ message: "Objeto obtenido", animes });
    })
      .catch((error) => {

        if (error) return res.status(500).send({ message: 'Error al devolver los datos' });

      });
  },


  searchAnimes: function (req, res) {
    var searchTerm = req.query.search;

    Anime.find({ name: new RegExp(searchTerm, 'i') })
      .then((animes) => {
        if (!animes || animes.length === 0) {

        }

        return res.status(200).send({ message: 'Resultados de la búsqueda', animes });
      })
      .catch((error) => {
        console.error(error);

      });
  },

  getImageFile: function (req, res) {
    var file = req.params.image;
    var path_file = './uploads/' + file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(200).send({
          message: "No existe la imagen"
        });
      }
    })
  },
  searchAnimesByOptions: function (req, res) {
    var category = req.query.category;
    var type = req.query.type;
    var year = req.query.year;
    var status = req.query.status;

    var filtro = {};

    if (category) {
      filtro.category = category;
    }

    if (type) {
      filtro.type = type;
    }

    if (year) {
      filtro.year = year;
    }

    if (status) {
      filtro.status = status;
    }

    Anime.find(filtro)
      .then((animes) => {
        if (!animes || animes.length === 0) {
          return res.status(404).send({ message: 'No hay animes que coincidan con los criterios de búsqueda' });
        }

        return res.status(200).send({ message: 'Resultados de la búsqueda', animes });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).send({ message: 'Error al buscar los animes' });
      });
  },


}

module.exports = controller;
