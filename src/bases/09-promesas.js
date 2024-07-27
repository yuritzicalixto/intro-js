// import { getHeroById} from "./08-imp-exp";



// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // console.log('2 segundo despues');
//         //resolve();
//         /*Tarea
//         importa el imp-exp
//         */
//         const p1 = getHeroById(2);
//         // resolve(p1);
//         // console.log(heroe);
//         reject('No se pudo encontrar al heroe')
//     }, 2000)
// }); 


// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ) );


/*   ==============  */

import { getHeroById} from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // console.log('2 segundo despues');
//         //resolve();
//         /*Tarea
//         importa el imp-exp
//         */
//         const p1 = getHeroById(2);
//         resolve(p1);
//         // console.log(heroe);
//         // reject(p1)
//         reject('No se pudo encontrar al heroe')
//     }, 2000)
// }); 


// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const p1 = getHeroById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar al heroe');
            }
            // resolve(p1);
            // console.log(heroe);
            // reject(p1)
            
        }, 2000)
    });
    // return promesa
}

getHeroeByIdAsync(5)
.then( console.log)
.catch(console.warn)
/* Los mismo de arriba, solo simplificado
.then(heroe => console.log('Heroe', heroe))
.catch(err=> console.warn(err))
*/