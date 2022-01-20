const { crearArchivo } = require( './helpers/multiplicar.js');
const argv = require('yargs').argv;


console.log(argv.base);

// crearArchivo(base)
//   .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//   .catch(err => console.log(err));
