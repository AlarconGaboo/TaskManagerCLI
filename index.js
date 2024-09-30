const yargs = require('yargs');
const { createTask, readTasks, updateTask, deleteTask } = require('./app/tasks');

// Comando para crear una tarea
yargs.command({
  command: 'create',
  describe: 'Crear una nueva tarea',
  builder: {
    titulo: {
      describe: 'Título de la tarea',
      demandOption: true,
      type: 'string',
    },
    contenido: {
      describe: 'Contenido de la tarea',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    createTask(argv.titulo, argv.contenido);
  },
});

// Comando para leer todas las tareas
yargs.command({
  command: 'read',
  describe: 'Leer todas las tareas',
  handler() {
    readTasks();
  },
});

// Comando para actualizar una tarea
yargs.command({
  command: 'update',
  describe: 'Actualizar una tarea',
  builder: {
    id: {
      describe: 'ID de la tarea a actualizar',
      demandOption: true,
      type: 'string',
    },
    titulo: {
      describe: 'Nuevo título de la tarea',
      type: 'string',
    },
    contenido: {
      describe: 'Nuevo contenido de la tarea',
      type: 'string',
    },
  },
  handler(argv) {
    updateTask(argv.id, argv.titulo, argv.contenido);
  },
});

// Comando para eliminar una tarea
yargs.command({
  command: 'delete',
  describe: 'Eliminar una tarea',
  builder: {
    id: {
      describe: 'ID de la tarea a eliminar',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    deleteTask(argv.id);
  },
});

// Asegurarse de que siempre se muestra ayuda si no se da ningún comando
yargs.demandCommand(1, 'Debes ingresar al menos un comando para usar esta herramienta.')
  .help()
  .argv;
