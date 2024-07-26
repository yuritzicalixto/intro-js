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
            resolve(p1);
            // console.log(heroe);
            // reject(p1)
            reject('No se pudo encontrar al heroe')
        }, 2000)
    });
    // return promesa
}

getHeroeByIdAsync(1).then(heroe => console.log('Heroe', heroe));