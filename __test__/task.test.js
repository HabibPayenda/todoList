import LocalStorageMock from '../__mocks__/LocalStorageMock.js';
import Task from '../src/TaskClass.js';

const Localstorage = new LocalStorageMock();

describe('Adding a task to the list', () => {
  it('should add a task to the list', () => {
    const tasks = Localstorage.getAllTasks();
    const index = tasks.length + 1;
    const description = 'New task';
    const task = new Task(description, index);

    Localstorage.addTask(task);

    expect(tasks).toHaveLength(index);
  });

  it('should have a length of greater than 0', () => {
    const value = 0;
    const tasks = Localstorage.getAllTasks();

    expect(tasks.length).toBeGreaterThan(value);
  });
});

describe('', () => {
  it('should remove an Item from the task', () => {
    const index = 1;
    const tasks = Localstorage.getAllTasks().filter((task) => task.index !== index);

    const deletedTask = tasks.filter((task) => task.index === index);
    expect(deletedTask[0]).toBeUndefined();
  });
});
