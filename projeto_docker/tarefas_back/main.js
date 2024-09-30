//require('dotenv').config();

const PORTA = process.env.SERVER_PORT;
const URL_BANCO_DE_DADOS = process.env.MONGO_URL;

// Importando bibliotecas
const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');

// Criando o servidor web
const app = express();

// Configurando o servidor web (middleware)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conecto os controllers
app.use('/tarefas', require('./controllers/tarefa_controller'));

// Conectando ao banco de dados
console.log('Conectando ao banco de dados...');
mongoose.connect(URL_BANCO_DE_DADOS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
    // Iniciando o servidor web
    console.log('Iniciando o servidor web...');
    app.listen(PORTA, () => {
      console.log(`Servidor rodando em http://localhost:${PORTA}`)
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });