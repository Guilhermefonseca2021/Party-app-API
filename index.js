const express = require("express");
<<<<<<< HEAD
const cors = require("cors");
const app = express();

=======
const app = express();

const cors = require("cors");


>>>>>>> d06a9da (back end UPDATED)
app.use(cors());
app.use(express.json());

// DATABASE connection
const connection = require("./database/connect");
<<<<<<< HEAD

connection();

// Routes(para nao importas todas rotas passei para outro arquivo)
=======
connection();

// Routes(toda abstracao de nossa rotas)
>>>>>>> d06a9da (back end UPDATED)
const routes = require('./routes/router')

app.use('/api', routes)

<<<<<<< HEAD
app.listen(3333, () => {
  console.log("Servidor Online!!");
});
=======

app.listen(3333, () => {console.log("Servidor Online!!")});
>>>>>>> d06a9da (back end UPDATED)
