const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, hasta, listar) => {
  try {
    let msg = '', consola = '';

    msg += '======================\n';
    consola += '======================\n'.rainbow;
    msg += `  Table del: ${base}\n`;
    consola += `  Table del: ${base}\n`.bold.cyan;
    msg += '======================\n';
    consola += '======================\n'.rainbow;

    for (let i = 1; i <= hasta; i++) {
      msg += `${base} x ${i} = ${base * i}\n`;
      consola += `${base.toString().magenta} x ${i.toString().yellow} = ${(base * i).toString().bold.red}\n`;
    }

    if (listar) {
      console.log(consola);
    }

    fs.writeFileSync(`salida/tabla-${base}.txt`, msg);

    return `tabla-${base}.txt`.bold.green;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
