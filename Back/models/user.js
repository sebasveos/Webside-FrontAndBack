'use strict'

var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    favorite: [{ type: Schema.Types.ObjectId, ref: 'anime', require: false }],
});


userSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}


module.exports = mongoose.model('user', userSchema); // Modelo de inicio
// Logica de negocio (Base de datos)

