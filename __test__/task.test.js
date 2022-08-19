/**
 * @jest-environment jsdom
 */

import {
  addTask,
  removeTask,
  localStorage,
  setCompleted,
  removeAllCompleted,
} from '../__mocks__/functions.js';

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

describe('Removing a task from the list', () => {
  it('should remove an Item from the task', () => {
    const index = 1;
    removeTask(index);

    expect(localStorage.list[0]).toBeUndefined();
  });
});

describe('Completed task functions', () => {
  it('should set the task as completed', () => {
    const index = 1;
    const desc = 'new';
    addTask(desc);
    setCompleted(index);

    expect(localStorage.list[index - 1].completed).toBeTruthy();
  });

  it('should remove all the completed tasks', () => {
    removeAllCompleted();
    const check = localStorage.list.filter((task) => task.completed === true);

    expect(check.length).toBe(0);
  });
});
