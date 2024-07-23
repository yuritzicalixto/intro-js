console.log("Hola Mundo");

//Scope Global
const nombre='Pedro' 
let apellido='Alvernt'

if (true) {
    const nombre='Julio'; //Scope Local
    let apellido='Sainz';

    console.log(nombre, apellido);
}

 const nombreCompelto=`Hola mundo. Soy ${nombre} ${apellido} `;

 console.log(nombreCompelto);

 function getSaludo(nombre){
    return 'Hola ' + nombre
 }

 console.log(`Es un texto que dice: ${getSaludo(nombre)}`);