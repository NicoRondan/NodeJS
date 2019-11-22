//Solicitamos el modulo http desde node
let http = require('http');
//el modulo url nos permite trabajar con direcciones url y enviarle parametros
let url = require('url');

//creamos el servidor
http.createServer(
    //Creamos funcion anonima, en donde request es para enviar solicitudes, response para devolver valores al navegador
    function(request, response) {
        //La solicitud al server ha sido con exito y decimos que se va a trabajar con texto plano
        response.writeHead(200, {'Content-Type':'text/plain'});
        

        //Aceptamos el envío de parametros en la url
        let params = url.parse(request.url, true).query;
        //el nombre del parametro que estamos enviando
        let input = params.number;
        //convertimos a numeros
        let numInput = new Number(input);
        //generamos un nro aleatorio a partir de input
        let numOutput = new Number(Math.random() * numInput).toFixed(0);
        //Lo mostramos en el navegador
        response.write(numOutput);
        //Finalizamos el objeto response
        response.end();

    }
//nuestro navegador escuchará las peticiones por el puerto 8000
).listen(8000);

console.log("Server2 inicializado...");