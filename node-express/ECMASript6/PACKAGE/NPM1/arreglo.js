//underscore sirve para trabajar con arreglos 
let arreglo = require('underscore');


//implementamos la libreria underscore
arreglo.each(
    [1,2,3,4,5,6,7], (num) => {
        console.log('numero : ' + num);
    }
);
