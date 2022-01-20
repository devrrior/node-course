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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con ${id} no encontrado`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.cantidad;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`Salario con ${id} no encontrado`);
  }
};

id = 2;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log('Error!');
    return console.log(err);
  }
  console.log('Empleado existe!');
  console.log(empleado);
});

getSalario(id, (err, salario) => {
  if (err) {
    console.log('Error!');
    return console.log(err);
  }
  console.log('Salario existe!');
  console.log(salario);
});
