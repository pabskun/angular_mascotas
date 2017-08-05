//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var PetSchema = new mongoose.Schema({
  name:String,
  breed: String
});

module.exports = mongoose.model('Pet', PetSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
