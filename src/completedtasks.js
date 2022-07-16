const storetask = (todoList) => {
  localStorage.setItem('todo-list-group', JSON.stringify(todoList));
};

const gettasks = () => JSON.parse(localStorage.getItem('todo-list-group'));
// *****Make checkbox true for completed tasks
export default (e) => {
  const list = gettasks();
  if (e.target.checked === true) {
    list[e.target.id].completed = true;
  } else {
    list[e.target.id].completed = false;
  }
  storetask(list);
};
