class LocalStorageMock {
  constructor() {
    this.list = [];
  }

  clearAllTasks() {
    this.list = [];
  }

  getTask(index) {
    return this.list[index] || null;
  }

  getAllTasks() {
    return this.list;
  }

  addTask(item) {
    const newItem = {
      description: item.description,
      completed: false,
      index: item.index,
    };

    this.list.push(newItem);
  }

  removeTask(index) {
    delete this.list[index];
  }
}

export default LocalStorageMock;