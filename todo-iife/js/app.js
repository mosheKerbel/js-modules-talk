const AppInitializerModule = (function (TaskModule, UIModule) {
    TaskModule.addTask({ title: "Wash the dishes", completed: false });
    TaskModule.addTask({ title: "Take out the trash", completed: false });
    UIModule.renderTasks(TaskModule.getTasks());
  
    function init() {
      const newTaskForm = document.getElementById("new-task-form");
      newTaskForm.addEventListener("submit", UIModule.handleNewTaskFormSubmit);
    }
  
    return {
      init,
    };
  })(TaskModule, UIModule);
  
  AppInitializerModule.init();