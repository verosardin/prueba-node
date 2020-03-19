let numeros = [2,4,6,5,7];

let dobleDeLosNumeros = numeros.map(function (unNumero) {
    return unNumero*2;
});

console.log(dobleDeLosNumeros);

let numerosPequenos = numeros.filter(function (numero){
return numero<5;
}
);
console.log(numerosPequenos);