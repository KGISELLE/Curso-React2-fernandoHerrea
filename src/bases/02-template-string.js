//Templete String

const nombre = 'Gis';
const apellido = 'Bernal';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Este es el texto: ${ getSaludo(nombreCompleto) }`);