const todoList = document.getElementById('todo-list');

function addTask(el) {
  // creating and appending the task to html//
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `
    <input class="check" type="checkbox" ${el.completed ? 'checked' : ''}>
    <input class="task-edit" type="text" class="description" value="${el.description}">
    <i class="fa-solid fa-ellipsis-vertical three-dots"></i>
    <button class='delete-btn'><i class="fa-solid fa-trash-can none"></i></button>   
  `;
  todoList.appendChild(task);

  const checkbox = task.children[0];
  const input = task.children[1];
  const trashIcon = task.children[3];

  // checkbox//
  if (checkbox.hasAttribute('checked')) {
    input.classList.add('checked');
  }

  checkbox.addEventListener('click', () => {
    const todoListArray = [...todoList.children];
    const index = todoListArray.indexOf(task);
    const tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks[index].completed = checkbox.checked;
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
    input.classList.toggle('checked');
  });

  // editing the task value//
  input.addEventListener('change', () => {
    const todoListArray = [...todoList.children];
    const index = todoListArray.indexOf(task);
    const tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks[index].description = input.value;
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
  });

  // removing the task//
  trashIcon.addEventListener('click', () => {
    const tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks.splice([...todoList.children].indexOf(task), 1);
    tasks.forEach((task, index) => {
      task.index = index;
    });
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
    todoList.removeChild(task);
  });
}

export default addTask;