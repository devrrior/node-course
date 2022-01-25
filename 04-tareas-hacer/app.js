require('colors');

const {
  inquirerMenu,
  pause,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecked,
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

// console.clear();

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    tareas.cargarTareaFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // crear opcion
        const desc = await leerInput('Descripcion: ');
        tareas.crearTarea(desc);

        break;
      case '2':
        // listar tareas
        tareas.listadoCompleto();
        break;
      case '3':
        tareas.listarPendientesCompletadas();
        break;
      case '4':
        tareas.listarPendientesCompletadas(false);
        break;
      case '5':
        const ids = await mostrarListadoChecked(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0') {
          const ok = await confirmar('Estas seguro?');

          if (ok) {
            tareas.borrarTarea(id);
            console.log('Tarea borrada correctamente.')
          }
        }
        break;
    }

    guardarDB(tareas.listadoArr);

    await pause();
  } while (opt != '0');
};

main();
