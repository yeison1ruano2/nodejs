const express = require('express');
const app = express();
const {infoCursos} = require('./cursos.js');

//routers
const routerProgramacion = express.Router();
const routerMatematicas = express.Router();
app.use('/api/cursos/programacion',routerProgramacion);
app.use('/api/cursos/matematicas',routerMatematicas);

app.get('/',(req,res)=>{
  res.send('Mi primer servidor. Cursos');
});

app.get('/api/cursos',(req,res)=>{
  res.send(JSON.stringify(infoCursos));
});

routerProgramacion.get('/',(req,res)=>{
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje',(req,res)=>{
  const resultados = infoCursos.programacion.filter(curso =>curso.lenguaje === req.params.lenguaje);
  res.send(JSON.stringify(resultados.length ? resultados:{error: `No se encontraron cursos de ${resultados}`}));
});

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
  const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === req.params.lenguaje && curso.nivel === req.params.nivel);
  if(req.query.ordenar === 'vistas'){
    return res.send(JSON.stringify(resultados.toSorted((a,b)=> b.vistas - a.vistas)));
  }
  res.send(JSON.stringify(resultados.length ? resultados: {error: `No se encontraron cursos de ${req.params.lenguaje} de nivel ${req.params.nivel}`}));
});

routerMatematicas.get('/',(req,res)=>{
  res.send(JSON.stringify(infoCursos.matematicas));
});

routerMatematicas.get('/:tema',(req,res)=>{
  const resultados = infoCursos.matematicas.filter(curso =>curso.tema === req.params.tema);
  res.send(JSON.stringify(resultados.length ? resultados:{error: `No se encontraron cursos de ${resultados}`}));
});

app.listen(3000,()=>{
  console.log('El servidor esta escuchando en el puerto 3000...');
});