//Carrega os pacotes necessários
var mongoose = require('mongoose');

// Define no Post Schema
var PostSchema   = new mongoose.Schema({
  titulo: String,
  desc: String,
  likes: Number,
  ativo: Boolean
});

// Exporta nosso model
module.exports = mongoose.model('Post', PostSchema);
