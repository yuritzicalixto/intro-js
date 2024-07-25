// import {heroes} from './data/heroes.js'
import { heroes } from "./data/heroes";
//Mi solución
// const getHeroById = (id) =>{
//     return heroes.find((valor)=> valor.id === id);
// }
const getHeroById = (id) => heroes.find((valor)=> valor.id === id);

console.log(getHeroById(4));



//Solución del Profesor
// const getHerosById = (id) =>{
//     return heroes.find((heroe)=> {
//         if (heroe.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }
// console.log(getHerosById(1));


// find() -> filter
const getHeroByOwner =(owner) => heroes.filter((valor)=> valor.owner === owner);

console.log(getHeroByOwner('DC'));