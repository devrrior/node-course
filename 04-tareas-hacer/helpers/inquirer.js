const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`,
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`,
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`,
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: '6',
        name: `${'6.'.green} Borar tarea`,
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('=================================='.green);
  console.log('     Seleccione una opcion:'.white);
  console.log('==================================\n'.green);

  const { opcion } = await inquirer.prompt(questions);

  return opcion;
};

const pause = async () => {
  console.log('\n');
  await inquirer.prompt([
    {
      type: 'number',
      name: 'enter',
      message: `Presion ${'enter'.green} para continuar`,
    },
  ]);
};

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,

      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pause,
  leerInput,
};
