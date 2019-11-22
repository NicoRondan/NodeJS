
//Patron proxy: a través de un objeto intermedio, validamos los parametros de E/S y si estos son válidos, damos acceso a otros métodos

let filtro = {
    set: function(obj, prop, value) {
        if(prop === 'edad') {
            //Verificamos si la edad no es un entero
            if(!Number.isInteger(value)){
                throw TypeError('Edad no es un número entero')
            }
            if (value > 130) {
                throw new RangeError('Edad no parece válido, revise')
            }
        }
        obj[prop] = value;
    }
};

let person = new Proxy({}, filtro);
person.edad = 33;
console.log('La edad actual es : '+person.edad);
//person.edad = 150;
person.edad = 'a';