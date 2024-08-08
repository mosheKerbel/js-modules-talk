const UIModule = (function () {
    const taskList = document.getElementById("task-list");
  
    function renderTasks(tasks) {
      taskList.innerHTML = "";
  
      tasks.forEach(function (task, index) {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        const button = document.createElement("button");
  
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () {
          TaskModule.toggleCompleted(index);
          renderTasks(TaskModule.getTasks());
        });
  
        label.textContent = task.title;
        if (task.completed) {
          label.classList.add("strike");
        }
  
        button.textContent = "Remove";
        button.addEventListener("click", function () {
          TaskModule.removeTask(index);
          renderTasks(TaskModule.getTasks());
        });
  
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(button);
  
        taskList.appendChild(listItem);
      });
    }
  
    function handleNewTaskFormSubmit(event) {
      event.preventDefault();
  
      const newTask = {
        title: event.target.elements.title.value,
        completed: false,
      };
  
      TaskModule.addTask(newTask);
  
      event.target.reset();
      renderTasks(TaskModule.getTasks());
    }
  
    return {
      renderTasks,
      handleNewTaskFormSubmit,
    };
  })();
  