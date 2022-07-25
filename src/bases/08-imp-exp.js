
//import { heroes } from "./data/heroes";

//Para agregar una ext-imp por default no hace falta agregar llaves
//Utilizar fn+f2
//Pero esta forma no es muy recomendada
//import cualquierCosa from "./data/default-unname";

//Exp-imp defalul recomendada
//import heroes, { owners } from "./data/heroes-default";

import { heroes, owners } from "../data/heroes-default";

console.log(owners);

//Find
export const getHeroesById = (id) => {
  return heroes.find((heroe)=> heroe.id === id );
} 

console.log( getHeroesById(2) );

//Filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner );

console.log(getHeroesByOwner('DC'));