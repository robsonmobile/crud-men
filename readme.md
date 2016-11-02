# CRUD-MEN : MongoDB + ExpressJs + NodeJs

### Projeto

...

### Iniciando
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
