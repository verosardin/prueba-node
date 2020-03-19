//For In
let persona = {
nombre: 'Veronica sardin',
edad: 28,
profesion: 'Programadora'
}

/*for (let aspecto in persona) {
console.log(persona[aspecto]);
}*/

for (let aspecto in persona) {
    console.log('En el atributo ' + aspecto + ' se encuentra el valor ' + 
    persona[aspecto]);
    }

//For of
let notas = [7, 8, 5, 7,5];

for (let i=0; i< notas.length; i++) {
console.log(notas[i]);
}

for (const elemento of notas){
console.log (elemento)
}

