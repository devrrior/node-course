const empleados = [
  {
    id: 1,
    nombre: 'Fernando',
  },
  {
    id: 2,
    nombre: 'Mario',
  },
  {
    id: 3,
    nombre: 'Gabriel',
  },
];

const salarios = [
  {
    id: 1,
    cantidad: 1000,
  },
  {
    id: 2,
    cantidad: 1500,
  },
];

const getEmpleado = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado
      ? resolve(empleado)
      : reject(`No existe el empleado con el id ${id}`);
  }));
};

const getSalario = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.cantidad;

    salario
      ? resolve(salario)
      : reject(`No existe el salario con el id ${id}`);
  }));
};

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));

// getEmpleado(id)
//   .then((empleado) => {
//     getSalario(id)
//       .then((salario) => {
//         console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

const id = 9;
let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
  )
  .catch((err) => console.log(err));
