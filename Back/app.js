'use strict'

var express = require('express');  //Acceder a la carpeta de express
var bodyParser = require('body-parser');
var app = express();
var path = require('path')


// Cargar archivos de rutas
var user_routes = require('./routes/user');
var anime_routes = require('./routes/anime');

// Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());                  //Cualquier objeto que llegue para convertirlo en JSON

// CORS Cabeceras

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
app.use('/api', user_routes);
app.use('/api', anime_routes);
app.use('/uploads', express.static(path.resolve('uploads')))

// Exportar
module.exports = app;

