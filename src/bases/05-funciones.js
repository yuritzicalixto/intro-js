// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

// const saludar2 = function(nombre){
//     return `Hola, ${nombre}`;
// }
// const saludar4 =()=> `Hola Mundo`


// const saludar = (nombre) => {
//     return `Hola, ${nombre}`;
// }

// const saludar3 = (nombre)=> `Hola, ${nombre}`;


// console.log(saludar('Diana'));


// const getUser =() =>{
//     return {
//         uid:'ABCD',
//         username:'Salsa_pica'
//     }
// }

// console.log(getUser());

// const getUser2 =() =>
//     ( {
//         uid:'ABCD',
//         username:'Salsa_pica'
//     })


// console.log(getUser());




/* HOMEWORK
1. Tranformar a una función de flecha
2. Tiene que retornar un objeto implicito
3. Pruebas
*/
const getUsuarioActivo = (nombre) => 
    ({
        uid:'ABDC12',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo); 