'use strict'

var multer = require('multer');
var path = require('path');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({  //Cuando suba una imagen va a ser guardada en la carpeta uploads 
    destination: 'uploads',
    filename:(req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});


module.exports = multer({storage});
