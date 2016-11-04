//Carrega os pacotes necessários
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var post = require('./models/post');

//Conecta ao MongoDB postapp
mongoose.connect('mongodb://localhost:27017/postapp');

//Cria o app express
var app = express();

//Usar body-parser na nossa aplicação
app.use(bodyParser.urlencoded({
  extended: true
}));

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

//Cria nova rota com o prefixo posts
var postRoute = router.route('/posts');

//Cria o endpoint /api/posts para as requisiçoes POST
postRoute.post((req, res) => {
    //Cria nova instancia do model Post
    var post = new Post();

    //Seta os atributos com os valores vindo do POST
    post.titulo = req.body.titulo;
    post.desc = req.body.desc;
    post.likes = req.body.likes;
    post.ativo = req.body.ativo;

    //Salva no MongoDB
    post.save((err) => {
      if (err) {
        res.send(err);
      }

      res.json({
        message: 'Post adicionado com sucesso',
        data: post
      });
    });
});

postRoute.get((req, res) => {

  Post.find((err, posts) => {

    if (err) {
      res.send(err);
    }

    res.json(posts);
  });
});

//Registra todas as nossas rotas com /api
app.use('/api', router);

//Inicia o server
app.listen(port);
console.log('Server Iniciado na porta ' + port);
