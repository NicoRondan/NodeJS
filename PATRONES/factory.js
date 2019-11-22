//Factory: a partir de un parametro de entrada, se generan distintos tipos de objetos

function factoryBurger() {

    this.createBurger = function(clase) {
        if(clase === 'burgerRoyal') {
            return burgerRoyal();
        }else if(clase === 'burgerSuprema') {
            return burgerSuprema();
        }
    }

    function Burger(ing, precio) {
        this.Ingredientes = ing;
        this.Precio = precio;
    }

    function burgerRoyal() {
        return new Burger(['burger','hotdog', 'huevo', 'queso'], 10);
    }

    function burgerSuprema() {
        return new Burger(['burger','chorizo', 'aceituna', 'jamon'], 15);
    }
};

let factory = new factoryBurger();
//let burger = factory.createBurger('burgerRoyal');
let burger = factory.createBurger('burgerSuprema');
console.log(burger);