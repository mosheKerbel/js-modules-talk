import $ from "jquery";
import * as taskManager from "./taskManager";
import * as renderer from "./renderer";
const EventEmitter = require('./eventEmitter');


const emitter = new EventEmitter();
const $newTaskForm = $("#new-task-form");
const $taskInput = $("#task-input");
function addPreExistingTasks() {
  const preExistingTasks = [
    { name: "Buy groceries", completed: false },
    { name: "Walk the dog", completed: false },
  ];

  preExistingTasks.forEach(function (task) {
    taskManager.addTask(task.name, task.completed);
  });
}

addPreExistingTasks();
renderer.renderTasks(taskManager.getTasks());

emitter.on('renderTasks', () => {
  renderer.renderTasks(taskManager.getTasks());
});

$newTaskForm.on("submit", function (event) {
  event.preventDefault();
  const taskName = $taskInput.val();

  if (taskName) {
    taskManager.addTask(taskName);
    $taskInput.val("");
  }
});