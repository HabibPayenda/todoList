import LocalStorage from './LocalStorageMock.js';
import Task from '../src/TaskClass.js';

export const localStorage = new LocalStorage();

export const addTask = (desc) => {
  const tasks = localStorage.getAllItems();
  const task = new Task(desc, tasks.length + 1);
  tasks.push(task);
  localStorage.setItem('tasks', [...tasks]);
};

export const removeTask = (index) => {
  localStorage.list = localStorage.list.filter((task) => task.index !== index);
  localStorage.list = localStorage.list.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('tasks', localStorage.list);
};

export const removeAllCompleted = () => {
  localStorage.list = localStorage.list.filter((task) => task.completed !== true);
  localStorage.list = localStorage.list.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('tasks', localStorage.list);
};

export const setCompleted = (index) => {
  localStorage.list = localStorage.list.map((task) => {
    if (task.index === index) {
      const test = task.completed;
      if (test) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    }
    return task;
  });
  localStorage.setItem('tasks', localStorage.list);
};

export const editTask = (index, editInput) => {
  const newTasks = localStorage.list.filter((item) => item.index !== index);
  const newTask = new Task(editInput.value, index);
  newTasks.splice(index - 1, 0, { ...newTask });

  localStorage.setItem('tasks', newTasks);
};