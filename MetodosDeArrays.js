/* ¿Cómo manipular los datos de un array?
Ahora que ya sabés que un array es una colección de datos ordenados ¿Te preguntaste alguna vez cómo podés hacer para
manipular los datos presentes en un array?
Los arrays en javascript tienen muchas funciones llamadas métodos que te van a permitir manipular los datos presentes
en ese arreglo  ¡Veamos cuáles son esos métodos! */

let notas = [3,5,10,9,7,8,8,8];
console.log(notas);

// VEAMOS ALGUNOS METODOS DE ARRAYS

// push()
// Inserta elementos al final del array
notas.push(1);
notas.push(4);
console.log(notas);


// pop()
// Retorna el último elemento del array.
// Importante: al retornar el elemento, también lo quita del array.
let ultimoElemento = notas.pop(); //quitamos y guardamos el ultimo elemento del array
console.log("Ultimo elemento: "+ultimoElemento);
console.log(notas);

// shift()
// Retorna el primer elemento del array.
// Nota: este método también quita el elemento del array
notas.shift(); // retorna 3
notas.shift(); // retorna 5
console.log(notas);

// unshift()
// Inserta uno o más datos al principio del array
notas.unshift(5); //volvemos agregar el 5
notas.unshift(3); //volvemos agregar el 3
console.log(notas);

// includes()
// Nos indica si un elemento existe en el array.
// Retorna true si encontró el elemento y false si no lo encontró
notas = [3,5,8,9,7,8,8];
console.log(   notas.includes(1)   ); //retorna false
console.log(   notas.includes(5)   ); //retorna true

// indexOf
// Busca un elemento en el arreglo y devuelve su posición (índice)
// Si no encuentra el elemento retorna -1
let primeraOcurrenciaDelNumero8 = notas.indexOf(8); //devuelve 2
console.log(primeraOcurrenciaDelNumero8);

// lastIndexOf()
// Es igual que indexOf pero comienza a buscar desde el final hacia el inicio del arrays
let ultimaOcurrenciaDelNumero8 = notas.lastIndexOf(8); //devuelve 6
console.log(ultimaOcurrenciaDelNumero8);

// join()
// Une los valores del array y retorna un string. Los separa con el caracter recibido como parametro.
console.log(   notas.join()  ); // devuelve '3,5,8,9,7,8,8'
console.log(   notas.join('-')  ); // devuelve '3-5-8-9-7-8-8'
console.log(   notas.join('')  ); // devuelve '3589788'
console.log(   notas.join(' ')  ); // devuelve '3 5 8 9 7 8 8'

console.log('-------------------------------');

// map()
// Recibe como parametro un callback. Dicho callback permite procesar los elementos del
// array según nuestra necesidad. Finalmente retornará un array nuevo con la misma cantidad
// de elementos que el array original.
// Nota: el callback recibe como parámetro cada uno de los elementos del array que va a procesar.
let arrayDeNumeros = [2,4,6];
let arrayDeNumerosPorDos = arrayDeNumeros.map(function(numero){
    return numero*2; //multiplico cada elemento del array por 2
});
console.log(arrayDeNumerosPorDos); // [4,8,12]
console.log('-------------------------------');
// Otro ejemplo de map
// Tenemos ya definido, un array de canciones:
let canciones = [
  {
    id: 1,
    nombre: "Manuelita",
    puntaje: 8.5
  },
  {
    id: 2,
    nombre: "La reina batata",
    puntaje: 7.8
  }
];
// Lo que queremos, como resultado, es un nuevo array llamado titulos que tenga únicamente
// los nombres de las canciones.
// Si bien hay muchas maneras de resolverlo, es una excelente instancia para ejercitar
// sobre la función map
let titulos = canciones.map(function(cancion){
    return cancion['nombre'];
});
console.log(titulos); // Array [ "Manuelita", "La reina batata" ]



console.log('-------------------------------');

// filter()
// Filtra los elementos del array que cumplan con la condición establecida.
// Retorna un array que tiene sólo aquellos elementos que pasaron el filtro.
// Recibe como parámetro un callback. El callback recibe como parámetro el elemento del array a filtrar.
// Ejemplo: tenemos un array con notas de un parcial y queremos saber cuáles notas están aprobadas...
notas = [5,7,8];
let notasAprobadas = notas.filter(function(nota){
    return nota >= 7;
});
// La forma corta (arroy function) sería:  let notasAprobadas = notas.filter(nota => nota >=7);
console.log(notasAprobadas); // [7,8]
console.log('-------------------------------');
/* Otro ejemplo de filter
Tenemos el array numeros definido y queremos filtrar aquellos que sean mayores a 18.
Tu trabajó será definir la variable mayores y almacenar en ella los números que cumplan con esa condición,
utilizando el método filter. */
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let mayores = numeros.filter(function(numero){
    return numero >= 18;
});
console.log(mayores);
console.log('-------------------------------');
// ultimo ejemplo de filter()
// Con el array de canciones declarado más arriba, queremos como resultado, es un nuevo array
// llamado lasMejores que tenga únicamente las canciones con puntaje mayor a 8.
let lasMejores = canciones.filter(function(cancion){
    return cancion['puntaje'] > 8;
});
console.log(lasMejores); // Array[0]: Object { id: 1, nombre: "Manuelita", puntaje: 8.5 }

console.log('-------------------------------');
// reduce()
// Reduce a la más mínima expresión el array, retornando un único valor.
// Recibe dos parámetros: un acumulador (o "estado actual") y el elemento del array.
// Optativamente puede recibir un valor inicial para el acumulador, va después del callback.
// Por ejemplo, si tenemos un array de enteros y queremos obtener la suma de todos sus elementos:
notas = [5,7,8];
let resultado = notas.reduce(function(acumulador,numero){
    return acumulador + numero;
},0); // el cero es el valor inicial que va a tomar el acumulador (es opcional)
console.log(resultado); // 20
console.log('-------------------------------');

// find()
// Devuelve el valor del primer elemento del array que cumple la condición proporcionada.
let frutitas = ['Manzanita', 'Naranjita', 'Bananita'];
let match = frutitas.find(function(frutita){
   return frutita === 'Naranjita';
});
console.log(match); // Naranjita
console.log('-------------------------------');
// otro ejemplo de find
// Utilizando el array de canciones definido más arriba, queremos como resultado una variable
// llamada reina que tenga únicamente el elemento cuyo nombre sea "La reina batata".
let reina = canciones.find(function(cancion){
   return cancion['nombre'] === 'La reina batata';
});
console.log(reina);


console.log('-------------------------------');
// forEach()
// Permite iterar sobre un array.
// Recibe como parámetro un callback. No devuelve nada.
// El callback puede recibir uno (elemento) o dos parámetros (elemento, indice).
let paises = ['Argentina','Brasil','Colombia'];
paises.forEach(function(elemento, indice){
    console.log(elemento + " con índice " + indice); // voy mostrando por consola los paises a medida que recorro el array
});

//prueba de git