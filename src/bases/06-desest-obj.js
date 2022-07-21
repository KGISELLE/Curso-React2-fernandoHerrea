//Desestructuracion - Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//Extrae lo que ponga dentro de las {} llaves del objeto persona.
const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

//Usos de la desestructuración
// const retornaPersona = (usuario) => {
//   console.log(usuario);
// }

// const retornaPersona = (usuario) => {
//   const { nombre, edad, clave } = usuario;
//   console.log( edad, clave, nombre );
// };

//Desestructuracion en el argumento colocambo {}
// const retornaPersona = ({ nombre }) => {
//   console.log( nombre );
// };

//Establecer valores por defecto directamente en el argumento
// const retornaPersona = ({ nombre, edad, rango = 'Capitan' }) => {
//   console.log( nombre, edad, rango );
// };

//retornaPersona( persona );


//Uso useContext
// const retornaPersona = ({ nombre, edad, rango = 'Capitan', clave }) => {
//   return {
//     nombreClave: clave,
//     anios: edad
//   }
// };

// const avengers = retornaPersona( persona );

// console.log(avengers);

//?
// const useContext = ({ nombre, edad, rango = 'Capitan', clave }) => {
//   return {
//     nombreClave: clave,
//     anios: edad,
//   }
// };

// //const avengers = useContext( persona );
// const { nombreClave, anios } = useContext( persona );

// console.log( nombreClave, anios);

//Retornar un objeto que tiene mas objetos dentro, extrayendo objetos anidados y asignandolos directamente a constantes
const useontext = ({ nombre, edad, rango = 'Capitan', clave }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.342343,
      lng: 86.87867
    }
  }
};

//const { nombreClave, anios, latlng } = useontext( persona );

//console.log( nombreClave, anios);

//console.log( latlng ); //{lat: 14.342343, lng: 86.87867}

//Si necesito accdeder directamente a la lat?
const { nombreClave, anios, latlng: { lat, lng } } = useontext( persona );

console.log( lat ); //14.342343