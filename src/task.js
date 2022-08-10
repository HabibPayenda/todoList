export const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

export default class Task {
  constructor(desc, index) {
    this.desc = desc;
    this.completed = false;
    this.index = index;
  }
}

export const addTask = (desc) => {
  const task = new Task(desc, tasks.length + 1);
  const newTasks = [...tasks, task];
  localStorage.setItem('tasks', JSON.stringify(newTasks));
};

export const removeTask = (index) => {
  const newTasks = tasks.filter((task) => task.index !== index);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
};