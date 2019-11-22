//Traemos a librería express
let express = require('express');

//Instanciamos el objetos express para trabajar con sus métodos en la app
let app = express(); 


//Ruteo
app.get(
    '/', function(req, res) {
        //Redireccionamos a index.html
        res.sendFile(__dirname + '/public/index.html');
    }
);

app.get(
    '/contactos', function(req, res) {
        //Redireccionamos a contactos.html
        res.sendFile(__dirname + '/public/contactos.html');
    }
);

//escuchamos las peticiones por el puerto 9000
app.listen(9000);

console.log("Server iniciado...");