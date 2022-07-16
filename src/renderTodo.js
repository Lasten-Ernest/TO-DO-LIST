import addTask from './addTask';

const renderTodo = () => {
  const tasks = JSON.parse(localStorage.getItem('storageTasks')) || [];
  tasks.forEach((task) => {
    addTask(task);
  });
};

export default renderTodo;