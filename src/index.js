import './style.css';

const todoListTasks = [
  {
    description: 'Create To-Do-List structure',
    completed: false,
    index: 1,
  },
  {
    description: 'Create pull request',
    completed: true,
    index: 2,
  },
  {
    description: 'Ask for code review',
    completed: true,
    index: 3,
  },
  {
    description: 'Merge the branch if green light',
    completed: false,
    index: 4,
  },
];
const btn = document.querySelector('.btnList');
const list = document.querySelector('#list-group');
function displayList() {
  todoListTasks.sort((a, b) => a.index - b.index);
  todoListTasks.forEach((item) => {
    const newItem = document.createElement('li');
    const newIconElement = document.createElement('i');
    newIconElement.classList.add('fa', 'fa-ellipsis-v');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    const textnode = document.createTextNode(item.description);
    label.appendChild(textnode);
    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    newItem.appendChild(newIconElement);
    list.insertBefore(newItem, btn);
  });
}
displayList();
