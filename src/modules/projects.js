export default class projects {
  static projectList = [];

  static initLocalStorage() {}

  static createProject(project) {
    this.projectList.push(project);
  }

  static deleteProject(index) {
    this.projectList.splice(index, 1);
  }

  static getProjectName(name) {
    return this.projectList.find((project) => project === name);
  }
}
