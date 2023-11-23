'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var animeSchema = new Schema({
    name: {type: String, unique: true}, 
    description: String,
    category: [String],
    type: String,
    year: Number,
    status: String,
    image: String
});


module.exports = mongoose.model('anime', animeSchema); 


