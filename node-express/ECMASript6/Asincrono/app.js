let archivo = require('fs');

//Leer el contenido de un archivo
let datos = archivo.readFileSync('prueba.txt');

//Operación sincrona
//Representación string de un array
console.log(datos.toString());

console.log('Proceso de Lectura Finalizada');