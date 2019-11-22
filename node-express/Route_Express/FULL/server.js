//Traemos a librería express
let express = require('express');

//Usamos bodyParser para enviar parametros a la url
let bodyParser = require('body-parser');

//Instanciamos el objetos express para trabajar con sus métodos en la app
let app = express(); 

//Acá decimos que no se podrán enviar valores en los parametros asociados a la url
app.use(bodyParser.urlencoded({
    extend : false
}));

//Ruteo
app.get(
    '/', function(req, res) {
        //Redireccionamos a index.html
        res.sendFile(__dirname + '/public/index.html');
    }
);

app.post(
    '/login', function(req, res) {

        //Recuperamos los valores obtenidos en el formulario de index.html
        let user_name = req.body.user;
        let password = req.body.password;
        console.log("El nombre del usuario es : "+ user_name + " y mi password es : "+password);
        //Finalizamos la respuesta
        res.end("finalizando");
    }
);

//escuchamos las peticiones por el puerto 9000
app.listen(9000);

console.log("Server iniciado...");