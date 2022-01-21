const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();

const base = argv.base,
  listar = argv.listar,
  hasta = argv.hasta;


crearArchivo(base, hasta, listar)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.log(err));
