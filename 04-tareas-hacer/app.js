require('colors');

const { inquirerMenu, pause, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

// console.clear();

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB){
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

        console.log(tareas.listadoArr);
        break;
    }

    guardarDB(tareas.listadoArr);

    await pause();
  } while (opt != '0');
};

main();
