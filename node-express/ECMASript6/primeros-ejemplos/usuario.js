class Usuario {

    constructor(nombres, apellidos) {
        this.nombre = nombres;
        this.apellidos = apellidos;
    }
}


let o1 = new Usuario('Nicolas', 'Rondan');

console.log("el valor del atributo nombre es : "+o1.nombre);