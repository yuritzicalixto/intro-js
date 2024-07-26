// import {heroes, owners} from './data/heroes.js'
import  heroes, {owners} from "../data/heroes";


//Mi solución
// const getHeroById = (id) =>{
//     return heroes.find((valor)=> valor.id === id);
// }
export const getHeroById = (id) => heroes.find((valor)=> valor.id === id);

// console.log(getHeroById(4));




// find() -> filter
export const getHeroByOwner =(owner) => heroes.filter((valor)=> valor.owner === owner);

// console.log(getHeroByOwner('DC'));

