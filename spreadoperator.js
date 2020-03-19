/*let frutasUno = ['banana', 'manzana', 'pera'],
let frutasDos = ['banana', 'manzana', 'pera'],
let todasLasFrutas = [...frutasUno, ...frutasDos];

console.log(todasLasFrutas);*/

let cursada = {
    curso: 'Fullstack',
    turno: 'Manana',
    Cede: 'Mendoza'
}

let estudianteUno = {
    nombre: 'Vero',
    apellido: 'Sardin',
    ...cursada
};

let estudianteDos = {
    nombre: 'Agus',
    apellido: 'Miro',
    ...cursada
};

console.log(estudianteUno);
console.log(estudianteDos);

//function conVariosParametros(... params) {}

/*function limpiarEspacios(...palabras){
console.log(palabras); 
}*/

function limpiarEspacios(...palabras){
   for (var i=0; i < palabras.length; i++){
palabras[i]= palabras[i].trim();
   }
   return palabras;
    }

let r1 = limpiarEspacios('    hola    ', 'que', 'tal');
let r2 = limpiarEspacios('hola', '            mundo');

console.log(r1);
console.log(r2);