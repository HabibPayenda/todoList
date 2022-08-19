import LocalStorage from './LocalStorageMock.js';
import Task from '../src/TaskClass.js';

export const localStorage = new LocalStorage();

export const addTask = (desc) => {
  const tasks = localStorage.getAllItems();
  const task = new Task(desc, tasks.length + 1);
  tasks.push(task);
  localStorage.setItem('tasks', tasks);
};

export const removeTask = (index) => {
  localStorage.list = localStorage.list.filter((task) => task.index !== index);
  localStorage.list = localStorage.list.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('tasks', localStorage.list);
};