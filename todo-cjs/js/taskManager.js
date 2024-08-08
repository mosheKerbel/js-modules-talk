const EventEmitter = require('./eventEmitter');

const emitter = new EventEmitter();
let tasks = [];

function addTask(taskName) {
  tasks.push({
    id: tasks.length,
    name: taskName,
    completed: false,
  });

  emitter.emit('renderTasks');
}

function removeTask(taskId) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  emitter.emit('renderTasks');
}

function toggleTask(taskId) {
  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      task.completed = !task.completed;
    }

    return task;
  });

  emitter.emit('renderTasks');
}

function getTasks() {
  return tasks;
}

module.exports = {
  addTask,
  removeTask,
  toggleTask,
  getTasks,
};
