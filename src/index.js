import './style.css';

const list = document.getElementById('list');

const tasks = [
  {
    desc: 'First Task',
    completed: false,
    index: 0,
  },
  {
    desc: 'Seconde Task',
    completed: false,
    index: 1,
  },
  {
    desc: 'Third Task',
    completed: false,
    index: 2,
  },
  {
    desc: 'Fourth Task',
    completed: false,
    index: 3,
  },
];

tasks.forEach((task) => {
  const listItem = document.createElement('li');
  listItem.classList.add('listItem');

  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.classList.add('check');

  const todo = document.createElement('p');
  todo.classList.add('todo');
  todo.innerText = task.desc;

  const listItemIcon = document.createElement('i');
  listItemIcon.classList.add('listItemIcon');
  listItemIcon.classList.add('fas');
  listItemIcon.classList.add('fa-ellipsis-v');

  listItem.append(check, todo, listItemIcon);
  list.append(listItem);
});
