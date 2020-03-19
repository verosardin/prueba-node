// Módulo nativo que permite trabajar con archivos del filesystem
const fs = require('fs');
let archivoJson = {
   nombre: 'tareas.json',
   leer: function() {
      let jsonFile = fs.readFileSync(this.nombre, 'utf-8'); // leemos el archivo json
      return JSON.parse(jsonFile); //lo convertimos a objeto literal
}
}

//crear función JSON que reescriba nuestro archivo   tareas.json. utilizar metodo 
//writeFileSync del modulo FS. la funcion debe recibir un array de tareas. debes convertir
//a JSON el array que reciba como parametro.

escribirJSON: function(arrayTareas){
   //primero convertimos el array en JSON.
   let json = JSON.stringify(arrayTareas, null, ' ');
   //segundo guardamos el json en el archivo tareas.json, todo lo que necesitemos modificar debe ir antes de esta línea.
   fs.writeFileSync(this.nombre, json);
},
/*guardarTarea que reciba una tarea(objeto)y luego de su ejecucion nuestra tarea
tiene que quedar agregada en el archivo tareas.json. utilizar la funcion escribirJSON.
La tarea nueva la tengo, necesito el listado de tareas para agregar la nueva */
guardarTarea: function (tarea)
let listaTareas = this.leer()
listaTareas.push(tarea);
/*ahora necesitamos guardarla(persistir)*/
this.escribirJSON(listaTareas);

}
   module.exports = archivoJson; // exportamos el módulo