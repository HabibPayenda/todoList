import './style.css';
import {
  tasks,
  addTask,
  removeTask,
  editTask,
} from './task.js';

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
  listItem.setAttribute('id', task.index);

  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.classList.add('check');

  const todo = document.createElement('p');
  todo.classList.add('todo');
  todo.innerText = task.desc;

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuClose = document.createElement('i');
  menuClose.classList.add('fas');
  menuClose.classList.add('fa-window-close');
  menuClose.classList.add('menuClose');
  menuClose.addEventListener('click', () => {
    menu.style.display = 'none';
  });

  const deleteItem = document.createElement('div');
  deleteItem.classList.add('menuItem');
  deleteItem.classList.add('deleteItem');
  deleteItem.innerText = 'Remove';
  deleteItem.addEventListener('click', () => {
    menu.style.display = 'none';
    removeTask(task.index);
    message.style.display = 'flex';
    message.style.backgroundColor = 'red';
    messageText.innerText = 'Task removed, Please refresh!';
  });

  const editItem = document.createElement('div');
  editItem.classList.add('menuItem');
  editItem.classList.add('editItem');
  editItem.innerText = 'Edit';
  editItem.addEventListener('click', () => {
    editTask(task.index);
  });

  menu.append(menuClose, deleteItem, editItem);

  const listItemIcon = document.createElement('i');
  listItemIcon.classList.add('listItemIcon');
  listItemIcon.classList.add('fas');
  listItemIcon.classList.add('fa-ellipsis-v');
  listItemIcon.addEventListener('click', () => {
    menu.style.display = 'flex';
  });

  listItem.append(check, todo, listItemIcon, menu);
  list.append(listItem);
});
