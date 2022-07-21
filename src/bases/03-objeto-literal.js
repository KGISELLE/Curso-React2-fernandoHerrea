//Objetos Literales - Operator Spread

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 555555,
    lat:12.3232,
    lng: 34.67363,
  }
};

//Creando un nuevo objeto que apunta al objeto persona creado anteriormente
// console.log( {
//   persona: persona 
// } );

//En ECMACS 6 cuando se tiene una propiedad en un objeto con el mismo nombre de su "key"" se obvia repetir esta propiedad.

//console.log( { persona } );


//console.table( persona );
//console.log( persona );

//Esta mutacion no se debe hacer jamas en react por que como podemos ver esta cambiando el objeto persona que es en el cual esta basado persona2 pero al realizar la nueva asignacion en persona2 tambien esta reasignando el valor para persona.
//const persona2 = persona;
//persona2.nombre = 'Peter';

//console.log(persona2);

//console.log(persona);

//Para crear un clone de persona es mejor crear un nuevo objeto y agregarle las propiedades, esto crea un espacio en memoria nuevo.
//const persona2Clone = { nombre: 'Juan' }

//Para evitar lo tedioso de volver a escribir un nuevo objeto solo para hacer copia de otro y más cuando tiene muchas propiedades, EMACS 6 incorporo el "Operator Spread ..."

const persona2Spread = { ...persona };
persona2Spread.nombre = 'Peter'

console.log('clone', persona2Spread);
console.log('original', persona);
