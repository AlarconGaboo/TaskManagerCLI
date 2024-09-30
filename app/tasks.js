const { v4: uuidv4 } = require('uuid');
const { loadTasksFromFile, saveTasksToFile } = require('./fileManager');

// Crear una nueva tarea
const createTask = (titulo, contenido) => {
  const tasks = loadTasksFromFile();
  const newTask = {
    id: uuidv4().substring(0, 8),
    titulo,
    contenido,
  };
  tasks.push(newTask);
  saveTasksToFile(tasks);
  console.log('Tarea creada:', newTask);
};

// Leer todas las tareas
const readTasks = () => {
  const tasks = loadTasksFromFile();
  if (tasks.length === 0) {
    console.log('No hay tareas para mostrar.');
  } else {
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.id}] ${task.titulo} - ${task.contenido}`);
    });
  }
};

// Actualizar una tarea
const updateTask = (id, titulo, contenido) => {
  const tasks = loadTasksFromFile();
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    console.log(`No se encontró la tarea con el ID: ${id}`);
    return;
  }

  tasks[index].titulo = titulo || tasks[index].titulo;
  tasks[index].contenido = contenido || tasks[index].contenido;
  saveTasksToFile(tasks);
  console.log('Tarea actualizada:', tasks[index]);
};

// Eliminar una tarea
const deleteTask = (id) => {
  const tasks = loadTasksFromFile();
  const tasksToKeep = tasks.filter(task => task.id !== id);

  if (tasks.length === tasksToKeep.length) {
    console.log(`No se encontró la tarea con el ID: ${id}`);
    return;
  }

  saveTasksToFile(tasksToKeep);
  console.log('Tarea eliminada con éxito.');
};

module.exports = {
  createTask,
  readTasks,
  updateTask,
  deleteTask
};
