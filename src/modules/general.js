import todos from './todos';
import projects from './projects';
import storage from './localStorage';
import UI from './ui';

const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');

const mainTodos = document.getElementById('todo-list');
const btnsGeneralDates = document.querySelectorAll('.general');

const projectFormInput = document.getElementById('project-input');
const projectList = document.getElementById('project-list');

export default class general {
  static init() {
    general.initStorage();
    general.initEventListeners();
  }

  static initStorage() {
    general.initLocalStorage();
    general.initTodoList();
    general.initProjectList();
    general.renderStorageLists();
  }

  static initEventListeners() {
    UI.selectedCategoryEventListener();
    UI.todoFormEventListener();
    UI.toggleCheckedEventListener();
    UI.addTodoEventListener();
    UI.editTodoEventListener();
    UI.deleteTodoEventListener();
    UI.confirmDeleteEventListener();
    UI.exitNewTodoEventListener();
    UI.dateCategoryEventListener();

    UI.addProjectEventListener();
    UI.deleteProjectEventListener();
    UI.exitNewProjectEventListener();
    UI.selectProjectCategoryEventListener();
    UI.createNewProjectEventListener();
  }

  static initLocalStorage() {
    if (!storage.getArray('todos')) {
      storage.storeArray('todos', todos.todoList);
      storage.storeArray('projects', projects.projectList);
    }
  }

  static initTodoList() {
    if (storage.getArray('todos')) {
      const string = storage.getArray('todos');
      todos.todoList = storage.parse(string);
    }
  }

  static initProjectList() {
    if (storage.getArray('projects')) {
      const string = storage.getArray('projects');
      projects.projectList = storage.parse(string);
    }
  }

  static renderStorageLists() {
    UI.renderTodoList();
    UI.renderProjectList();
  }

  static clearTodoInputFields() {
    title.value = '';
    date.value = '';
    priority.value = 'normal';
  }

  static clearProjectInputField() {
    projectFormInput.value = '';
  }

  static toggleHidden(node) {
    node.classList.toggle('hidden');
  }

  static clearMainDisplay() {
    mainTodos.innerHTML = '';
  }

  static clearProjectDisplay() {
    projectList.innerHTML = '';
  }

  static hideGeneralBtnsSelected() {
    btnsGeneralDates.forEach((btn) => {
      if (btn.classList.contains('selected-category'))
        btn.classList.remove('selected-category');
    });
  }

  static hideProjectBtnsSelected() {
    document.querySelectorAll('.project-name').forEach((btn) => {
      if (btn.classList.contains('selected-project'))
        btn.classList.remove('selected-project');
    });
  }
}
