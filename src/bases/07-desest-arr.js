//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

const [ p1 ] = personajes;

console.log( p1 ); //Goku


const [ , p2 ] = personajes;

console.log( p2 ); //Vegeta


const [ , , p3 ] = personajes;

console.log( p3 ); //Trunks

//?
const retornaArreglo = () => {
  return ['ABC', 123];
}

const arr = retornaArreglo();
console.log(arr);

//Para extraer solo un valor determinado
const [ letras, numeros ] = retornaArreglo();
console.log( letras );


//Tarea
//1. el primer valor del arreglo se llamara nombre 
//2. el segundo valor del arreglo setNombre

const usetate = ( valor ) => {
  return [ valor, () =>{ console.log('Hola mundo') } ]
};

// const arr2 = useState('Goku');

// console.log(arr2);

const [ nombre, setNombre ] = usetate('Goku');


console.log( nombre );
setNombre();
