let archivo = require('fs');

archivo.readFile(
    'prueba.txt', (err, data) => {
        if (err)  return console.error(err);
            console.log(data.toString());
    }
);

console.log("Proceso de lectura finalizado");