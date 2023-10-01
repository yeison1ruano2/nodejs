const express = require('express');
const app = express();
const {infoCursos} = require('./datos/cursos.js');

//routers

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion',routerProgramacion);
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas',routerMatematicas);

app.get('/',(req,res)=>{
  res.send('Mi primer servidor. Cursos');
});

app.get('/api/cursos',(req,res)=>{
  res.send(JSON.stringify(infoCursos));
});

app.listen(3000,()=>{
  console.log('El servidor esta escuchando en el puerto 3000...');
});