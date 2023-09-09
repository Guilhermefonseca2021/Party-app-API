const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// DATABASE connection
const connection = require("./database/connect");

connection();

// Routes(para nao importas todas rotas passei para outro arquivo)
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(3333, () => {
  console.log("Servidor Online!!");
});
