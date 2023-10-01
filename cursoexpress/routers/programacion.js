const express = require('express');
const routerProgramacion = express.Router();
const {programacion} = require('../datos/cursos.js').infoCursos;
//middleaware
routerProgramacion.use(express.json());

routerProgramacion.get('/',(req,res)=>{
  res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje',(req,res)=>{
  const resultados = programacion.filter(curso =>curso.lenguaje === req.params.lenguaje);
  res.send(JSON.stringify(resultados.length ? resultados:{error: `No se encontraron cursos de ${resultados}`}));
});

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
  const resultados = programacion.filter(curso => curso.lenguaje === req.params.lenguaje && curso.nivel === req.params.nivel);
  if(req.query.ordenar === 'vistas'){
    return res.send(JSON.stringify(resultados.toSorted((a,b)=> b.vistas - a.vistas)));
  }
  res.send(JSON.stringify(resultados.length ? resultados: {error: `No se encontraron cursos de ${req.params.lenguaje} de nivel ${req.params.nivel}`}));
});

routerProgramacion.post('/',(req,res)=>{
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

routerProgramacion.put('/:id',(req,res)=>{
  const {body:cursoActualizado,params:{id}} = req;
  const indice = programacion.findIndex(curso => curso.id == id);
  if(indice >= 0){
    programacion[indice]=cursoActualizado;
  }
  res.send(JSON.stringify(programacion));
});

routerProgramacion.patch('/:id',(req,res)=>{
  const {body:infoActualizada,params:{id}}=req;
  const indice = programacion.findIndex(curso => curso.id == id);
  if(indice >= 0){
    const cursoModificar = programacion[indice];
    Object.assign(cursoModificar,infoActualizada);
  }
  res.send(JSON.stringify(programacion));
});

routerProgramacion.delete('/:id',(req,res)=>{
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);
  if(indice >= 0){
    programacion.splice(indice,1);
  }
  res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;