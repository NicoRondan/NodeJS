//Solicitamos el modulo http desde node
let http = require('http');

//creamos el servidor
http.createServer(
    //Creamos funcion anonima, en donde request es para enviar solicitudes, response para devolver valores al navegador
    function(request, response) {
        //La solicitud al server ha sido con exito y decimos que se va a trabajar con texto plano
        response.writeHead(200, {'Content-Type':'text/plain'});
        //Enviamos un mensaje al navegador
        response.end('Bienvenidos ');

    }
//nuestro navegador escuchará las peticiones por el puerto 8000
).listen(8000);

console.log("Server inicializado...");

