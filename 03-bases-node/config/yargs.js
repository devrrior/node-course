const argv = require('yargs')
  .option({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla de multiplicar',
    },
    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Hasta que numero multiplicar',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b) && isNaN(argv.h)) {
      throw 'La base tiene que ser numero';
    }
    return true;
  }).argv;

module.exports = argv;
