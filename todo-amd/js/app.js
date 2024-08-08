requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'https://code.jquery.com/jquery-3.6.0.min'
  }
});

require(['jquery', 'taskManager', 'renderer', 'eventEmitter'], function($, taskManager, renderer, EventEmitter) {  
  const $newTaskForm = $('#new-task-form');
  const $taskInput = $('#task-input');

  function addPreExistingTasks() {
    const preExistingTasks = [
      { name: 'Buy groceries', completed: false },
      { name: 'Walk the dog', completed: false }
    ];

    preExistingTasks.forEach(function(task) {
      taskManager.addTask(task.name, task.completed);
    });
  }

  addPreExistingTasks();
  renderer.renderTasks(taskManager.getTasks());

  const emitter = new EventEmitter();
  emitter.on('renderTasks', () => {
    renderer.renderTasks(taskManager.getTasks());
  });
  
  $newTaskForm.on('submit', function(event) {
    event.preventDefault();
    const taskName = $taskInput.val();

    if (taskName) {
      taskManager.addTask(taskName);
      $taskInput.val('');
    }
  });
});
