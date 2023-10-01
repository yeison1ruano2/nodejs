const express = require('express');
const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos.js').infoCursos;

routerMatematicas.get('/',(req,res)=>{
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema',(req,res)=>{
  const resultados = matematicas.filter(curso =>curso.tema === req.params.tema);
  res.send(JSON.stringify(resultados.length ? resultados:{error: `No se encontraron cursos de ${resultados}`}));
});

module.exports = routerMatematicas;