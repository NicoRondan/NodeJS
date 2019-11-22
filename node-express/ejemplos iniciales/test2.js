let factorial = 0;
let resp = 0;

fact = 5;

resp = 1;

for (let i = 1; fact >= i; i++) {
 resp = resp*i;
 console.log(" Iteraciòn " +i+ " : "+ "resp : "+ resp);
};

console.log("El factorial del numero 5 es: "+ resp);