//fechaActual.getDay();
//Domingo es 0, lunes 1 y asi. numero del dia de la semana.

//getDate el numero que hace referencia al dia del mes en curso.

//get month. los meses tambien empiezan en 0. Enero es 0.

//getFullYear . te retorna el numero de a;o completo.
// dentro de los parentesis de new date pongo los datos si quiero una fecha especifica que no es la actual(anio, mes y dias en numeros);

let fechaActual = new Date();
console.log (fechaActual.toUTCString()); 

console.log (fechaActual.getFullYear()); 
console.log (fechaActual.getDate()); 
console.log (fechaActual.getDay()); 

let diaDeLaSemana = fechaActual.getDay();
let dia = fechaActual.getDate();
let anio= fechaActual.getFullYear();
let mes = fechaActual.getMonth();

let meses = ['Enero', 'Febrero','marzo', 'Abril', 'Mayo', 'Junio'];


console.log ('Es el '+ dia + ' de    ' + meses[mes] + ' del anio '+ anio);
