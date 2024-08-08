define(['jquery'], function($) {
    function renderTasks(tasks) {
      const $taskList = $('#task-list');
      $taskList.empty();
      
      tasks.forEach(function(task) {
        const $task = $('<li>', {
          id: 'task-' + task.id
        });
        
        const $checkbox = $('<input>', {
          type: 'checkbox'
        });
        
        $checkbox.prop('checked', task.completed);
        $checkbox.on('click', function() {
          require(['taskManager'], function(taskManager) {
            taskManager.toggleTask(task.id);
          });
        });
        
        const $label = $('<label>', {
          for: 'task-' + task.id,
          text: task.name,
          class: task.completed ? 'strike' : ''
        });
        
        const $removeBtn = $('<button>', {
          text: 'Remove'
        });
        
        $removeBtn.on('click', function() {
          require(['taskManager'], function(taskManager) {
            taskManager.removeTask(task.id);
          });
        });
        
        $task.append($checkbox);
        $task.append($label);
        $task.append($removeBtn);
        
        $taskList.append($task);
      });
    }
    
    return {
      renderTasks
    };
  });
  