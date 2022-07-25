// Promesas


// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 2000);
// })

// promesa.then(()=> {
//   console.log("then de la promesa-resolve");
// })

import { getHeroesById } from "./bases/08-imp-exp"

//! const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroesById(2);
//     resolve(p1)
//     // reject("no se puedo manejar error");
//   }, 2000);
// });


// promesa.then((heroe)=> {
//   console.log("heroe", heroe);
// })
// .catch( error => console.warn(error))

const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroesById(id);
      if(p1) {
        resolve(p1)
      } else {
        reject("no se puedo manejar error");
      }
      //console.log(p1);
      // resolve(p1)
    }, 2000);
  });
}

getHeroesByIdAsync(1)
  // .then(heroe => console.log("heroe", heroe))
  .then(console.log)
  // .catch(error => console.warn(error))
  .catch(console.warn)


