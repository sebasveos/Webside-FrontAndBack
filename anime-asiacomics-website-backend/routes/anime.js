'use strict'

var express = require('express');
var AnimeController = require('../controllers/anime')
var router = express.Router();
var multer = require('../libs/multer')

router.post('/saveAnime',multer.single('image'), AnimeController.saveAnime);
router.get('/getAnime/:name?', AnimeController.getAnime);
router.get('/get-image/:image', AnimeController.getImageFile);
router.get('/getAnimes/:category', AnimeController.getAnimes);
router.get('/searchAnimes', AnimeController.searchAnimes);
router.get('/getAllAnimes', AnimeController.getAllAnimes);
router.get('/searchAnimesByOptions', AnimeController.searchAnimesByOptions);



module.exports = router;