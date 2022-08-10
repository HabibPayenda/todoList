import './style.css';
import { tasks, addTask, removeTask } from './task.js';

const list = document.getElementById('list');
const refresh = document.getElementById('refresh');
const addIcon = document.getElementById('addIcon');
const text = document.getElementById('text');
const message = document.getElementById('message');
const messageText = document.getElementById('messageText');

refresh.addEventListener('click', () => {
  document.location.reload();
  messageText.innerText = '';
});

addIcon.addEventListener('click', () => {
  const desc = text.value;
  addTask(desc);
  message.style.display = 'flex';
  messageText.innerText = 'Task added, Please refresh!';
});

// const tasks = [
//   {
//     desc: 'First Task',
//     completed: false,
//     index: 0,
//   },
//   {
//     desc: 'Seconde Task',
//     completed: false,
//     index: 1,
//   },
//   {
//     desc: 'Third Task',
//     completed: false,
//     index: 2,
//   },
//   {
//     desc: 'Fourth Task',
//     completed: false,
//     index: 3,
//   },
// ];

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
  listItemIcon.addEventListener('click', () => {
    removeTask(task.index);
    message.style.display = 'flex';
    message.style.backgroundColor = 'red';
    messageText.innerText = 'Task removed, Please refresh!';
  });

  listItem.append(check, todo, listItemIcon);
  list.append(listItem);
});
