let infoCurso={

        "titulo": "Aprende Node.js",
        "numVistas": 8555,
        "numLikes":21123,
        "Temas":[
          "JavaScript",
          "Node.js"
        ],
        "esPublico":true

}

//Objeto -> cadena de caracteres
//cadena de caracteres en formato JSON
let infoCursoJSON=JSON.stringify(infoCurso);

console.log(infoCursoJSON + '\n');
console.log('TIPO DE DATO');
console.log(typeof infoCursoJSON);

//Cadena de caracteres -> Objeto
let infoCursoObjeto=JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log('NUMEROS DE LIKES DEL OBJETO');
console.log(infoCursoObjeto.numLikes);
console.log('TIPO DE DATO');
console.log(typeof infoCursoObjeto);

