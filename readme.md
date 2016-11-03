# CRUD-MEN : MongoDB + ExpressJs + NodeJs

## Projeto

...

## Iniciando
1. **Instalando os programas necessários**
  * Instale a ultima versão do NodeJs e do NPM (Gerenciados de pacotes do Node). [Link](https://nodejs.org/en/)
  * Instale e rode o MongoDB. [Link](https://www.mongodb.com/)

2. **Estrutura da aplicação**
  ```
  projeto/
    | models/           //guarda nossos modelos
    |    | post.js
    |    | user.js
    | node_modules/     //pacotes npm - criado automatimante pelo npm
    | package.json      //definições do app node e das dependencias
    | server.js         //arquivo principal da nossa aplicação
  ```

3. **Instalando as dependencias**
  * Acesse a pasta do seu projeto e execute:
    ```
    npm init
    ```
    E siga os passos da tela. Isso criará o arquivo `package.json`

  * Em seguida instalamos o ExpressJs (framework para construção de webapps em Node)
    ```
    npm install express --save
    ```
    O `--save` vai colocar o express como uma dependencia do seu projeto. E isso pode ser visto no seu `package.json`

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
    No meu caso o *OUTPUT* foi `Server Iniciado na porta 3000`.

    Dessa forma o servidor ja vai estar rodando e o resultado pode ser visto em [localhost:3000/api](http://localhost:3000/api)

4. **Pacotes que podem auxiliar**
  * *Nodemon*:

    Toda vez que modificamos nosso código fonte, precisamos reiniciar o servidor para que as alterações tenham efeito.

    O *Nodemon* faz essa tarefa pra gente, monitorando qualquer mudança no codigo fonte e reiniciando o servidor automaticamente.
    Para instalar basta:
    ```
    npm install -g nodemon
    ```
    Utilizamos o `-g` aqui para o acesso ao pacote global.
    Ou
    ```
    npm install nodem --save-dev
    ```
    Utilizamo o `--save-dev` para armazenar o pacote como uma dependencia para o desenvolvimento
      > Perceba que no nosso `package.json` existe um atributo chamado `scripts`.
      > Estes scripts pode ser 'rodados' pelo comando `npm run [nome do script]`

    Crie um novo script no seu `package.json`
    ```
    "scripts": {
      ...
      "dev": "nodemon server.js"
    },
    ```
    E em seguida inicie o servidor com o comando
    ```
    npm run dev
    ```

  * *Node Inspector*:

  É uma *debugger interface* para aplicações Node baseadas no [Blink Dev Tools](https://chromium.googlesource.com/chromium/blink) e
  funciona pratimaente da mesma forma que o *Chrome Dev Tools*.

  Da mesma forma que instalamos o *Nodemon*, instalaremos o *Node Inspector*
  ```
  npm install -g node-inspector
  ```
  para instalar globalmente, ou
  ```
  npm install node-inspector --save-dev
  ```
  para instalar e salvar como um dependencia de desenvolvimento
    > Isso é muito bom quando o projeto é compartilhado

  Uma vez instalado, o comando para iniciar é:
  ```
  node-debug server.js
  ```
  Ou se preferir, crie um script `debug` para rodar com o `npm run debug`

  Esse comando iniciará o pacote e seu navegador padrão


  * *Postman*:

  É um cliente HTTP que auxilia (e muito) a realização de *requests* simples à complexas

  É um podereso complemento para a construção de webapps em qualquer linguagem e ambiente.

  Você pode conhecer um pouco mais dele aqui> [Postman](http://www.getpostman.com/)

  Faça o download, e o instale. Após isso voce pode testar nossa API enviando uma requisição do tipo GET ao endereço
  http://localhost:3000/api e voce verá o resultado de várias formas.

## CRUD
1. **Conectando ao MongoDB**
  * Levando em consideração que seu MongoDB já está instalado e rodando, precisamos fazer 3 passos para nos conectarmos
  1. Instalar o pacote Mongoose
  2. Carregar o pacote Mongoose
  3. Conectarmos ao Mongo através da nossa *string* de conexão

  Instale o Mongoose com o comando:
  ```
  npm install mongoose --save
  ```
  E vamos carregá-lo agora no nosso `server.js`
  ```javascript
  //Carrega os pacotes necessários
  var express = require('express');
  var mongose = require('mongoose');
  ```
  E fazemos a conexão com o MongoDB
  ```javascript
  //Carrega os pacotes necessários
  var express = require('express');
  var mongoose = require('mongoose');

  //Conecta ao MongoDB postapp
  mongoose.connect('mongodb://localhost:27017/postapp');
  ```
  Depois disso, execute `npm run dev` para iniciar o seu servidor. Se tudo deu certo, o servidor iniciará sem erros.
    > Caso encontre algum erro relacionado ao mongodb, verifique se os executáveis dele foram adicionados no PATH das suas variaveis de ambiente.
    > O mongodb, por padrão, procura por um diretório C:\\data\\db então crie este diretório para não encontrar problemas
    > Não se esqueça de verificar se o mongodb está rodando, caso não, use `mongod` no terminal

2. **Criando o primeiro Model - POST**
  * Crie o arquivo `post.js` na pasta models, como mostramos na estrutura do projeto:
  ```
  projeto/
    | models/           //guarda nossos modelos
    |    | post.js
    ...
  ```

  E agora vamos adicionar algumas linhas.
  * Carregamos o mongoose
  ```javascript
  //Carrega os pacotes necessários
  var mongoose = require('mongoose');
  ```
  * Criamos o nosso mongoose schema que mapeará uma coleção do mongodb (no mongodb tabelas são chamadas de collections)
  ```javascript
  // Define no Post Schema
  var PostSchema   = new mongoose.Schema({
    titulo: String,
    desc: String,
    likes: Number,
    ativo: Boolean
  });
  ```
  * Exportamos nosso model pra ser usado na nossa app
  ```javascript
  // Exporta nosso model
  module.exports = mongoose.model('Post', PostSchema);
  ```

  Agora só precisamos carregar nosso novo Post model no nosso `server.js`
  ```javascript
  //Carrega os pacotes necessários
  var express = require('express');
  var mongoose = require('mongoose');
  var post = require('./models/post');
  ```
