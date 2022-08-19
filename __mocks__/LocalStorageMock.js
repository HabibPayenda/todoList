export default class LocalStorage {
  constructor() {
    this.list = [];
  }

  setItem(key, value) {
    this.list[key] = value;
  }

  getItem(key) {
    return this.list[key];
  }

  clear() {
    this.list = [];
  }

  getAllItems() {
    return this.list;
  }
}
