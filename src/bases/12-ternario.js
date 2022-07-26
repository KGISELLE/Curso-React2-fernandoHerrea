//Operador ternario

const activo = true;
let mensaje = "";

// if (activo) {
//   mensaje = "activo";
// } else {
//   mensaje = "Inactivo";
// }

// mensaje = ( activo ) ? "activo" : "inactivo"; //activo
//mensaje = ( !activo ) ? "activo" : "inactivo"; //inactivo
// mensaje = ( !activo ) ? "activo" : null; //null
// mensaje = activo && "activo"; //activo
mensaje = !activo && "activo"; //false

console.log(mensaje);