const persona={
    nombre: 'Tony',
    apellido: 'Satrk',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip:5553209,
        lat: 14.89,
        lng: 34.599
    }
};
//Spread
const persona2= {...persona}
persona2.nombre='Peter' 


console.log(persona);
console.log(persona2);