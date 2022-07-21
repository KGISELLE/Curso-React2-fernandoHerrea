//Funciones en JS

//Con las funciones de esta manera accidentalmente podemos caerle enciam con algo
// function saludar( nombre ) {
//   return `Hola, ${ nombre }`;
// }

//Al trabajar funciones de esta forma nos muestra errores impotantes en consola
// const saludar = function ( nombre ) {
//   return `Hola, ${ nombre }`;
// }

//Una funcion tradicional como la anterior se puede transformar a una "Arrow Function"
const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`;
}
//Ventajas: Se puede simplificar en una sola linea
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

//Otro ejemplo cuando el return es un objeto
// const getUser = () => {
//   return {
//     uid: 'ABCD',
//     username: 'Gis_1234'
//   }
// }

//Como le puedo decir a JS que quiero retornar el objeto de manera implicita(). Retorna un Obj Implicito
const getUser = () => (
  { 
    uid: 'ABCD', 
    username: 'Gis_1234' 
  }
);

//Asi se puede poner en una sola linea
//const getUser = () => ({ uid: 'ABCD', username: 'Gis_1234' });

console.log(getUser());
//saludar = 30;

//console.log( saludar('Goku') );

console.log( saludar2('Vegeta') );
console.log( saludar3('Vegeta') );


//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un obj implicito
//3. Pruebas
// function getUsuarioActivo( nombre ) {
//   return {
//     uid: 'ABCDE',
//     username: nombre
//   }
// };

const getUsuarioActivo = ( nombre ) => (
  {
    uid: 'ABCDE',
    username: nombre
  }
);

const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo);