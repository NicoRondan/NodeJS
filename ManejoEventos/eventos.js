
let eventos = require('events');

//Clase gestionadora de eventos (emisores y receptores)
let Emisor = eventos.EventEmitter;

//Instanciamos
let objEmisor = new Emisor();

setInterval( () => {
    //Enviamos un mensaje por segundo con la fecha actual
    objEmisor.emit('data', new Date());
}, 1000 );

//escuchamos lo que emita el emisor data
objEmisor.on('data', (fechaActual) => {
    console.log('La fecha actual es : '+fechaActual);
});
