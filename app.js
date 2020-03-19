let leerJSONDeTareas = require('./tareas.js');
let argumento0 = process.argv[0]; // argumento por defecto
let argumento1 = process.argv[1]; // argumento por defecto
let accion = process.argv[2]; // primer argumento del usuario
/*console.log(argumento0);
console.log(argumento1);*/
//console.log(accion);
switch (accion) {
   case 'listar':
      /*tenemos que crear un objeto literal que se va a llamar tarea, lo paso por argumento
      cada argumento va separado por un espacio, argumento crear, espacio y ahi el nombre de la tarea,
      espacio y el estado de la tarea. */
      console.log('Listado de tareas:');
      let tareas = leerJSONDeTareas.leer();
      /*
      1. Modificar la funcionalidad de listar tareas. Deberás utilizar el método forEach .
      Recordá que forEach puede recibir dos parámetros, siendo el segundo
      nuestro index, es posible que tengas que usarlo.
      */
          //console.log(tareas);
//tareas.forEach ((tarea, i) => {
//console.log(i + '- ' + tareas[i].titulo + ' - ' + tareas[i].estado);
//}};
console.log ('--Con forEach--'); {
tareas.forEach((tareas, i)=>{
   console.log(i + '- ' +
   tareas.titulo + ' - ' +
   tareas.estado);
});
leerJSONDeTareas.escribirJSON(tareas);

/*for (let i = 0;  i < tareas.length; i++) {
          console.log(i + '- ' + tareas[i].titulo + ' - ' + tareas[i].estado);
      }*/
      break;
      case undefined:
      console.log('Necesito una acción (listar)');
      break;   
      default:
      console.log('No comprendo la acción que quieres ejecutar.');
}