import './style.css';
import {
  tasks,
  addTask,
  editTask,
} from './task.js';

const list = document.getElementById('list');
const refresh = document.getElementById('refresh');
const addIcon = document.getElementById('addIcon');
const text = document.getElementById('text');

refresh.addEventListener('click', () => {
  document.location.reload();
});

addIcon.addEventListener('click', () => {
  const desc = text.value;
  addTask(desc);
});

tasks.forEach((task) => {
  const listItem = document.createElement('li');
  listItem.classList.add('listItem');
  listItem.setAttribute('id', task.index);

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
  listItemIcon.addEventListener('click', () => {
    editTask(task.index);
  });

  listItem.append(check, todo, listItemIcon);
  list.append(listItem);
});
