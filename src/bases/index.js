import { getHeroById} from "./08-imp-exp";



const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log('2 segundo despues');
        //resolve();
        /*Tarea
        importa el imp-exp
        */
        const p1 = getHeroById(2);
        // resolve(p1);
        // console.log(heroe);
        reject('No se pudo encontrar al heroe')
    }, 2000)
}); 


promesa.then((heroe)=>{
    console.log('heroe', heroe);
})
.catch( err => console.warn( err ) );