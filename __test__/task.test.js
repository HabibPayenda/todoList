import { addTask, removeTask, localStorage } from '../__mocks__/functions.js';

describe('Adding a task to the list', () => {
  it('should add a task to the list', () => {
    const desc = 'hello';
    addTask(desc);
    expect(localStorage.list.length).toBe(1);
  });

  it('should have a length of greater than 0', () => {
    const value = 0;
    const tasks = localStorage.list;

    expect(tasks.length).toBeGreaterThan(value);
  });
});

describe('', () => {
  it('should remove an Item from the task', () => {
    const index = 1;
    removeTask(index);

    expect(localStorage.list[0]).toBeUndefined();
  });
});
