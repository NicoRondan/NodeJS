let suma = (x,y) => x + y;

console.log("La suma de los numeros es : "+suma(4,8));


//estos tres puntos significan que puedo agregar n valores
let promedio = (... values) => values.reduce((a,b) => a+b)/values.length;

console.log("El promedio de los numeros ingresados es : "+promedio(4,8,6,2));