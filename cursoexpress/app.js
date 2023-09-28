const express = require('express');
const app = express();
const {infoCursos} = require('./cursos.js');

app.get('/',(req,res)=>{
  res.send('Mi primer servidor. Cursos');
});

app.listen(3000,()=>{
  console.log('El servidor esta escuchando en el puerto 3000...');
});