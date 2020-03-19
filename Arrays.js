/*
LECCIÓN 11- ARREGLOS

Hay dos maneras de crear Arrays.
Un array puede contener valores de distinto tipo.
Los arrays son objetos, por lo tanto podemos acceder a sus métodos y atributos.

Forma 1 para crear un array:
*/
var arreglo1 = new Array(20); //arreglo de 20 posiciones

// Forma 2 para crear un array:
var arreglo2 = [20]; //arreglo de 20 posiciones

/*
Inconsistencias:
podemos crear inconsistencias si creamos de forma incorrecta
los arrays, por ejemplo:
arreglo = new Array(20,10); // puede generar una inconsistencia
arreglo = [20,10, ]; // puede generar una inconsistencia
Los casos anteriores son ejemplo de cómo NO DEBO declarar un array.

Para cargar valores en un array en su declaración, hacemos así:
*/
var arregloColores = new Array("rojo", "azul", "verde");

var arregloPersona = ["Julio", 22, true]; // recordemos que puede tomar valores de distinto tipo

// También podemos acceder a una posición en concreto de un array:
arreglo1[0] = "valor"; //indicamos el índice
arreglo1[1] = 235;
arreglo1[2] = false;
arreglo1[3] = 25.8;
console.log('Mostramos un arreglo llamado "arreglo1": ');
console.log(arreglo1);
console.log('---------------------------');
// Con el atributo length podemos conocer su longitud, por ejemplo:
console.log('La longitud del "arregloColores" es: ' + arregloColores.length); //devuelve 3
console.log('---------------------------');
// Con el método push() podemos insertar un elemento al final del arreglo:
arregloColores.push("Amarillo");
console.log("Agregamos un elemento al final del arreglo");
console.log(arregloColores);
console.log('---------------------------');
// Con el método pop() podemos quitar el último elemento:
arregloColores.pop();
console.log("Quitamos el ultimo elemento del arreglo");
console.log(arregloColores);
console.log('---------------------------');
// Con el método unshift() podemos insertar un elemento al principio del arreglo:
arregloColores.unshift("Amarillo");
console.log("Agregamos un elemento al principio del arreglo");
console.log(arregloColores);
console.log('---------------------------');
// Con el método shift() podemos quitar el primer elemento:
arregloColores.shift();
console.log("Quitamos el primer elemento del arreglo");
console.log(arregloColores);
console.log('---------------------------');
// reverse(), método que establece que el array invierte sus elementos:
console.log('reverse(), método que establece que el array invierte sus elementos: ');
arregloColores.reverse();
console.log(arregloColores);
console.log('---------------------------');
// sort(), este método es muy útil cuando tengamos un array con elementos string, pues estos serán ordenados alfabéticamente:
console.log('sort(), este método es muy útil cuando tengamos un array con elementos string, pues estos serán ordenados alfabéticamente: ');
arregloColores.sort();
console.log(arregloColores);
console.log('---------------------------');
/*
slice(), método que puede contener dos argumentos (el segundo es opcional), los cuales indican el inicio y fin del sub-array obtenido. Siempre devuelve otro array, por ejemplo si a arregloColores, le hacemos arregloColores.slice(1,3); obtendremos otro array que tiene los elementos anaranjado y azul.
Los argumentos son numeros enteros y cuentan los elementos del array desde el inicio, es decir, desde el indice cero. El segundo argumento es opcional y siempre cuenta un elemento menos (si ponemos 3 como en el ejemplo, va a contar 2 elementos desde el inicio). Si no colocamos segundo argumento, entonces llega hasta el final del arreglo.
*/
arregloColores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"];
console.log('Mostramos un array de colores y a continuación usamos el método "slice(1,3)" para obtener otro array con los elementos anaranjado y azul: ');
console.log(arregloColores);
var colores = arregloColores.slice(1,3);
console.log(colores); // devuelve anaranjado y azul

// Para ver más métodos: https://devcode.la/tutoriales/manejo-de-arrays-en-javascript/
console.log('---------------------------');

// Con un ciclo for() podemos iterar un array:
console.log('Ahora recorremos el array con un ciclo For()');
for(var i = 0; i<arregloColores.length;i++)
{
	console.log(arregloColores[i]);
}

// Pero también lo podemos iterar con un For-of:
console.log('---------------------------');
let superheroes = ['batman', 'deadpool','tormenta'];
for (unSuperheroe of superheroes) {
	console.log(unSuperheroe);
}
console.log('---------------------------');

// O podemos iterar con un forEach
superheroes.forEach(function(unSuperheroe){
	console.log(unSuperheroe);
});
