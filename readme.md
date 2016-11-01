# CRUD-MEN : MongoDB + ExpressJs + NodeJs

### Projeto

...

### Iniciando
1. Instalando os programas necessários
  * Instale a ultima versão do NodeJs e do NPM (Gerenciados de pacotes do Node). [Link](https://nodejs.org/en/)
  * Instale e rode o MongoDB. [Link](https://www.mongodb.com/)

2. Estrutura da aplicação
  ```
  projeto/
    | models/           //guarda nossos modelos
    |    | post.js
    |    | user.js
    | node_modules/     //pacotes npm - criado automatimante pelo npm
    | package.json      //definições do app node e das dependencias
    | server.js         //arquivo principal da nossa aplicação
  ```

3. Instalando as dependencias
  * Acesse a pasta do seu projeto e execute:
  ```
  npm init
  ```
  e siga os passos da tela. Isso criará o arquivo `package.json`

  * Em seguida instalamos o ExpressJs (framework para construção de webapps em Node)
  ```
  npm install express --save
  ```
  o --save, vai colocar o express como uma dependencia do seu projeto. E isso pode ser visto no seu `package.json`

  * Agora vamos configurar o servidor. Se voce não criou, crie o arquivo `server.js` dentro da pasta do seu projeto
  ```javascript
  //Carrega os pacotes necessários
  var express = require('express');

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

  ```

  * Após isso basta iniciar o nosso servidor com o comando:
  ```
  node server.js
  ```
  No meu caso o *OUTPUT* foi `Server Iniciado na porta 3000`
  Dessa forma o servidor ja vai estar rodando e o resultado pode ser visto em [localhost:3000/api](http://localhost:3000/api)
