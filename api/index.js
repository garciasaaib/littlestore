const express = require('express');
const morgan = require('morgan');
const routerApi = require('./routes');


const app = express();
const port = 3000
app.use(express.json());
app.use(morgan('dev'));

routerApi(app)

app.get('/', (req, res) => {
  res.send("este es mi server en express")
})

app.get('/new', (req, res) => {
  res.send("otra ruta")
})





app.listen(port, console.log("estoy vivo en el puerto " + port))
