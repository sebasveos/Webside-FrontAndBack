'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var router = express.Router();


router.post('/saveUser', UserController.saveUser);
router.post('/authenticationUser', UserController.authenticationUser); 
router.get('/getUser/:name?' , UserController.getUser);
router.post('/addFavoriteAnime', UserController.addFavoriteAnime);
router.get('/getUsersFavorites' , UserController.getUsersFavorites);
router.get('/getAnimesFavoritesUser/:id', UserController.getAnimesFavoritesUser);
router.post('/removeFavoriteAnime', UserController.removeFavoriteAnime);
router.get('/checkFavoriteAnime/:userId/:animeId', UserController.checkFavoriteAnime);
router.post('/updateUserName', UserController.updateUserName);
router.post('/updatePassword', UserController.updatePassword);

module.exports = router;