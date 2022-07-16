const clearBnt = document.querySelector('.clear');

function clearAll() {
  clearBnt.addEventListener('click', () => {
    const todoList = document.getElementById('todo-list');
    const todoListArray = [...todoList.children];

    todoListArray.forEach((task) => {
      const input = task.children[1];
      if (input.classList.contains('checked')) {
        todoList.removeChild(task);
      }
    });

    let tasks = JSON.parse(localStorage.getItem('storageTasks'));
    tasks = tasks.filter((task) => !task.completed);
    localStorage.setItem('storageTasks', JSON.stringify(tasks));
  });
}

export default clearAll;
