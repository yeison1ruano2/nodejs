const http = require('http');
const cursos = require('./cursos');
const { type } = require('os');

const servidor = http.createServer((req,res)=>{
  const {method} = req;
  switch(method){
    case 'GET':
      return manejarSolicitudGET(req,res);
    case 'POST':
      return manejarSolicitudPOST(req,res);
    default:
      res.statusCode = 501;
      res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
      break;
  }
});

const puerto = 3000;

servidor.listen(puerto,()=>{
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});

function manejarSolicitudGET(req,res){
  const path = req.url;
  if(path === '/'){
    res.statusCode = 200;
    return res.end('Bienvenidos a mi primer servidor  y API creado con Node.js');
  }else if (path === '/api/cursos'){
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  }else if(path === '/api/cursos/programacion'){
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion))
  }
  res.statusCode = 404;
  return res.end('El recurso solicitado no existe');
}

function manejarSolicitudPOST(req,res){
  const path = req.url;
  if(path === '/cursos/programacion'){
    let cuerpo = '';
    req.on('data',(contenido)=>{
      cuerpo += contenido.toString();
    });
    req.on('end',()=>{
      console.log(cuerpo);
      console.log(typeof cuerpo);
      cuerpo = JSON.parse(cuerpo);
      console.log(typeof cuerpo);
      res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    });
  }
}