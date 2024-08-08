const TaskModule = (function () {
    const tasks = [];
  
    function addTask(newTask) {
      tasks.push(newTask);
    }
  
    function removeTask(taskIndex) {
      tasks.splice(taskIndex, 1);
    }
  
    function toggleCompleted(taskIndex) {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
    }
  
    function getTasks() {
      return tasks;
    }
  
    return {
      addTask,
      removeTask,
      toggleCompleted,
      getTasks,
    };
  })();
  