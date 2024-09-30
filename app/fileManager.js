const fs = require('fs');
const path = './tareas.txt';

// Función para leer el archivo tareas.txt con manejo de errores
const loadTasksFromFile = () => {
  try {
    const dataBuffer = fs.readFileSync(path);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    console.log('No se pudo leer el archivo de tareas o el archivo no existe. Se creará uno nuevo.');
    return [];
  }
};

// Función para guardar las tareas en el archivo tareas.txt
const saveTasksToFile = (tasks) => {
  try {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(path, dataJSON);
    console.log('Tareas guardadas correctamente.');
  } catch (e) {
    console.log('No se pudo guardar las tareas. Error:', e.message);
  }
};

module.exports = {
  loadTasksFromFile,
  saveTasksToFile
};
