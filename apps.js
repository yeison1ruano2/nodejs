// function  ordenarProducto(producto){
//   return new Promise((resolve,reject)=>{
//     console.log(`Ordenando: ${producto} de la tienda`);
//     setTimeout(()=>{
//       if(producto=='taza'){
//         resolve('Ordenando una taza con cualquier logo');
//       }else{
//         reject('Este producto no esta disponible.');
//       }
//     },2000);
//   });
// };

// function procesarPedido(respuesta){
//   return new Promise((resolve)=>{
//     console.log("Procesando pedido");
//     console.log(`La respuesta fue: ${respuesta}`);
//     setTimeout(()=>{
//       resolve('Gracias por tu compra,disfruta tu producto');
//     },4000);
//   });
// }

// ordenarProducto('hola').then(respuesta=>{
//   console.log(respuesta);
//   return procesarPedido(respuesta);
// }).then(respuestaProcesada =>console.log(respuestaProcesada)).catch(error =>{
//   console.log(error);
// });

// async function realizarPedido(producto){
//   try{
//     const respuesta =  await ordenarProducto(producto);
//     console.log('Respuesta recibida');
//     const respuestaProcesada = procesarPedido(respuesta);
//     console.log(respuestaProcesada);
//   } catch(error){
//     console.log(error);
//   }
// }

// realizarPedido('taza');



// const estatusPedido = ()=>{
//   return Math.random() < 0.8;
// }

// const miPediodoPizza = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(estatusPedido()){
//       resolve('Pedido exitoso, su pizza esta en camino');
//     }else{
//       reject('Ocurrio un error, por favor intente nuevamente');
//     }
//   },3000);
// });

// const manejarPedido= (mensajeConfirmacion)=>{
//   console.log(mensajeConfirmacion);
// }
// const rechazarPedido= (mensajeError)=>{
//   console.log(mensajeError);
// }

// //miPediodoPizza.then(manejarPedido,rechazarPedido);

// miPediodoPizza
//   .then((mensajeConfirmacion)=>console.log(mensajeConfirmacion)).catch((mensajeError)=>console.log(mensajeError));



// const promesaCumplida = false;
// const miPromesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(promesaCumplida){
//         resolve('Promesa cumplida');
//       }else{
//         reject('Promesa rechazada');
//       }
//     },3000);
// });
// const manejarPromesaCumplida = (mensaje)=>console.log(`Mensaje: ${mensaje}`);
// const manejarPromesaRechazada = (razonRechazo) => console.log(`Mensaje: ${razonRechazo}`)
// //miPromesa.then((mensaje)=>console.log(`Mensaje: ${mensaje}`));
// miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);