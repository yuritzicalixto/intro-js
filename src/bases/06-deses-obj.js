/*
Desestructuración
Asignación Desestructurante
*/

const persona ={
    nombre:'Tony',
    edad: 45,
    clave:'Iron Man'
};


// const{ nombre } = persona;

// console.log(nombre);


// const retornaPersona = (user) =>{
//     console.log(user);
// }

// retornaPersona(persona);

const useContext = ({clave, nombre, edad, rango='capitan'}) =>{
    // console.log(nombre, edad, rango, clave);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 133.49,
            lng: -2372.90
        }
    }
}

// retornaPersona(persona);


//Desestructuración de useContext
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);