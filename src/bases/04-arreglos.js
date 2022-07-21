//Arreglos en JS

//De esta forma no se trabajan arreglos en React y actualmente es muy raro encontrar esta sintaxis en JS
//const arreglo = new Array( 100 );

const arreglo = [1,2,3,4];

//No es recomendable utilizar el push porque el push modifica el arreglo principal, por esto cuando querramos insertar algo lo vamos a hacer utilizando el Spread Operator.
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//let arreglo2 = arreglo;
//arreglo2.push(5);

//let arreglo2 = [arreglo, 5];
//El Spread Operator agrega cada uno de los elementos del array original.
let arreglo2 = [ ...arreglo, 5 ];

//el metodo map nos crea un nuevo arreglo y así podemos trabajar directamente sobre el arreglo base.
//a map se le pasa siempre una funcion
//Callback = una funcion que se ejecuta dentro de esta metodo map.
//En este caso no se modificaria el arreglo2
let arreglo3 = arreglo2.map( function(numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);