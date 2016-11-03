//Carrega os pacotes necessários
var express = require('express');
var mongoose = require('mongoose');
var post = require('./models/post');

//Conecta ao MongoDB postapp
mongoose.connect('mongodb://localhost:27017/postapp');

//Cria o app express
var app = express();

//Cria o express Router
var router = express.Router();

//Usa a porta definida no ambiente ou 3000
var port = process.env.PORT || 3000;

//Inicio da rota para testes
router.get('/', (req, res) => {
  res.json({
    message: 'App Rodando'
  });
});

//Registra todas as nossas rotas com /api
app.use('/api', router);

//Inicia o server
app.listen(port);
console.log('Server Iniciado na porta ' + port);
