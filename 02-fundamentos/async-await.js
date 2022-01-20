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
    const empleado = empleados.find((e) => e.id === id);

    empleado
      ? resolve(empleado.nombre)
      : reject(`No existe el empleado con el id ${id}`);
  }));
};

const getSalario = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id);

    salario
      ? resolve(salario.cantidad)
      : reject(`No existe el salario con el id ${id}`);
  }));
};

const id = 5;

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario de ${empleado} tiene un salario de ${salario}`;
  } catch (error) {
    throw error;
  }
};

getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
