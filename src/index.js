import './style.css';

const todoListTasks = [
  {
    description: 'Create Project Repo',
    completed: false,
    index: 1,
  },
  {
    description: 'Clone the Repo to local machine',
    completed: true,
    index: 2,
  },
  {
    description: 'Open my IDE',
    completed: true,
    index: 3,
  },
  {
    description: 'Setting up Webpack',
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

// document.querySelector('h1').classList.add('header');