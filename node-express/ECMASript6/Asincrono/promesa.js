let Promise = require('promise');


//Las promesas nos permiten controlar errores
promesa = new Promise(
    function(resolve, reject) {
        let contador = 0;
        let rpta = 0;

        for (let i = 0; i < 200000000; i++) {
            if (i == 200000000 ) {
                rpta = A[-1];
                contador = 1;
            };
            
        };

        if (contador > 0) {
        resolve("Bucle terminó con exito");
        }else {
            reject(Error("Error con la variable contador"));
        }
    }
)

promesa.then(function(resultado) {
    console.log(resultado);
}, function(error) {
    console.log(error);
}
).catch(function(error) {
    console.log(error);
});