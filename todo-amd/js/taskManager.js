define(function() {
  
  var tasks = [];
  
  function onTaskMutate() {
    require(['eventEmitter'], function(EventEmitter) {  
      const emitter = new EventEmitter();
      emitter.emit('renderTasks');
    });
  }

  function addTask(taskName) {
    tasks.push({
      id: tasks.length,
      name: taskName,
      completed: false
    });
  
    onTaskMutate();
  }
  
  function removeTask(taskId) {
    tasks = tasks.filter(function(task) {
      return task.id !== taskId;
    });
    
    onTaskMutate();
  }
  
  function toggleTask(taskId) {
    tasks = tasks.map(function(task) {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      
      return task;
    });
    
    onTaskMutate();
  }

  function getTasks() {
    return tasks;
  }
  
  return {
    addTask,
    removeTask,
    toggleTask,
    getTasks
  };
});
