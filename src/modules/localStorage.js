export default class storage {
  static storeArray(name, arr) {
    localStorage.setItem(name, this.stringify(arr));
  }

  static getArray(name) {
    return localStorage.getItem(name);
  }

  static modifyArray(name, newArr) {
    localStorage.setItem(name, this.stringify(newArr));
  }

  static clearStorage() {
    localStorage.clear();
  }

  static stringify(obj) {
    return JSON.stringify(obj);
  }

  static parse(obj) {
    return JSON.parse(obj);
  }
}
