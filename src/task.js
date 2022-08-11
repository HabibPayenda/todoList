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
  let newTasks = tasks.filter((task) => task.index !== index);
  newTasks = newTasks.map((task, index) => {
    task.index = index + 1;
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
};

export const editTask = (index) => {
  const task = tasks[index - 1];
  const item = document.getElementById(index);
  item.innerHTML = '';
  const editInput = document.createElement('input');
  editInput.classList.add('editInput');
  editInput.value = task.desc;

  const menuOk = document.createElement('i');
  menuOk.classList.add('fas');
  menuOk.classList.add('fa-check');
  menuOk.classList.add('menuOk');
  menuOk.addEventListener('click', () => {
    const newTasks = tasks.filter((item) => item.index !== index);

    const newTask = new Task(editInput.value, index);
    newTasks.splice(index - 1, 0, { ...newTask });

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    document.location.reload();
  });

  item.append(editInput, menuOk);
};
