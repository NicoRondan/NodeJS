//Singleton permite generar una unica instancia u objeto de una clase

let Singleton = (function() {
    let instance;
    function createInstance() {
        let multas = new Object();
        multas.licencia = 1500;
        multas.luzRoja = 120;
        return multas;
    }
    return{
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
//Verificamos que creamos una única instancia
console.log('Instancias son iguales : '+(instance1 === instance2));
console.log('La multa por licencia es : '+ instance1.licencia);