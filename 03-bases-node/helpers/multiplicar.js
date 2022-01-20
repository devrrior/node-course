const fs = require('fs');

const crearArchivo = async (base) => {

    try {

      let msg = '';

      msg += '======================\n';
      msg += `  Table del: ${ base }\n`;
      msg += '======================\n';

      for (let i = 0; i <= 10; i++) {
        msg += `${base} x ${i} = ${ base * i}\n`;
      }

      console.log(msg)

      fs.writeFileSync(`tabla-${base}.txt`, msg);

      return `tabla-${base}.txt`;
       
    } catch (err) {
      throw(err);
    }


  
}

module.exports = {
  crearArchivo
}
