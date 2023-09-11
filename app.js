const fs=require('fs');

function estructura(){
    return(
        `<!DOCTYPE html>
        <html lang="es">
            <head>
                <title>NODE.jS</title>
            </head>
            <body>
                <h1> FREECODECAMP</h1>
                <p>Estoy aprendiendo NODE.JS</p>
            </body>
        </html>
        <p>Hola</p>
        <p>Arreglado</p>`
    );
};

console.log('Antes de leer el archivo');

const archivo=fs.readFileSync('index.html','utf-8'); 

console.log(archivo);

console.log('Despues de leer el archivo');

fs.renameSync('index.html','main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Nombre cambiado con exito')
}); 

console.log('Despues de cambiar el nombre');

//agregar contenido al final de un archivo
fs.appendFileSync('index.html','<p>Hola</p>');

console.log('Archivo actualizado');

console.log('Despues de agregar contenido al archivo');

//reemplazar todo el contenido del archivo
fs.writeFileSync('index.html',estructura(),(err)=>{
    if(err){
        throw err;
    }
    console.log('contenido reemplazado');
});

console.log('Despues de reemplazar el contenido del archivo');

fs.unlinkSync('index.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo eliminado');
});

console.log('Despues de eliminar el archivo');