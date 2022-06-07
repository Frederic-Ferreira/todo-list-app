import todos from './todos';
import dates from './dates';
import projects from './projects';
import storage from './localStorage';
import general from './general';

const todoForm = document.querySelector('.todo-form');
const newTodoLi = document.querySelector('.new-todo');
const mainTodos = document.getElementById('todo-list');

const title = document.getElementById('title');
const date = document.getElementById('date');
const priority = document.getElementById('priority');

const btnAddTodo = document.getElementById('create-todo');
const btnExitNewTodo = document.querySelector('.exit--new-todo');
const btnsGeneralDates = document.querySelectorAll('.general');

const btnNewProject = document.getElementById('create-project');
const exitNewProject = document.querySelector('.exit--new-project');

const newProjectForm = document.querySelector('.new-project');
const projectList = document.getElementById('project-list');
const projectInput = document.getElementById('project-input');

export default class UI {
  deleteTodo = false;
  deleteProject = false;
  static generalCategory = 'all';

  static selectedCategoryEventListener() {
    btnsGeneralDates.forEach((btn) => {
      if (btn.classList.contains(UI.generalCategory))
        btn.classList.add('selected-category');
      else btn.classList.remove('selected-category');

      general.hideProjectBtnsSelected();
    });
  }

  static todoFormEventListener() {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const id = Math.floor(Math.random() * 100);
      const category = UI.generalCategory.includes('project')
        ? UI.generalCategory.slice(7)
        : '';

      const newTodo = todos.createTodo(
        title.value,
        date.value,
        priority.value,
        id,
        false,
        category
      );

      todos.todoList.push(newTodo);
      storage.modifyArray('todos', todos.todoList);

      general.clearTodoInputFields();
      UI.toggleNewTodo();
      UI.renderTodoList();
    });
  }

  static exitNewTodoEventListener() {
    btnExitNewTodo.addEventListener('click', UI.toggleNewTodo);
  }

  static editTodoEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('edit')) return;

      const li = e.target.closest('li');

      UI.renderModifyTodoForm(li);
      UI.modifiedTodoFormEventListener();
    });
  }

  static deleteTodoEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('delete-todo')) return;

      const confirm = e.target.closest('div').nextElementSibling;

      // Hide any other possible confirm-delete already open
      UI.hideConfirmsDelete();

      // Show the confirm-delete the user just clicked
      general.toggleHidden(confirm);

      // Set EventListener to possibly hide the confirm-delete
      UI.hideConfirmDeleteTodoEventListener();
      UI.deleteTodo = true;
    });
  }

  static hideConfirmDeleteTodoEventListener() {
    document.addEventListener('click', (e) => {
      const guardClause = e.target.closest('li');

      if (UI.deleteTodo === false) return;

      // If the user click anywhere but on a todo element
      if (guardClause === null) {
        UI.hideConfirmsDelete();
        UI.deleteTodo = false;
      }
    });
  }

  static hideConfirmsDelete() {
    document.querySelectorAll('.delete-request').forEach((btn) => {
      if (!btn.classList.contains('hidden'))
        general.toggleHidden(btn);
    });
  }

  static confirmDeleteEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('delete-request')) return;
      const index = e.target.closest('li').dataset.index;

      todos.deleteTodo(index);
      storage.modifyArray('todos', todos.todoList);

      UI.renderTodoList();
    });
  }

  static modifiedTodoFormEventListener() {
    const form = document.querySelector('.modified-todo-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target.closest('form');

      UI.renderModifiedTodo(form);
    });
  }

  static addTodoEventListener() {
    btnAddTodo.addEventListener('click', UI.toggleNewTodo);
  }

  static toggleNewTodo() {
    mainTodos.appendChild(newTodoLi);
    general.toggleHidden(newTodoLi);
  }

  static toggleCheckedEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('check')) return;

      const btn = e.target;
      const li = e.target.closest('li');

      todos.toggleCheck(btn, li);
      storage.modifyArray('todos', todos.todoList);
    });
  }

  static dateCategoryEventListener() {
    btnsGeneralDates.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetClass = e.target.classList;

        targetClass.contains('today')
          ? (UI.generalCategory = 'today')
          : targetClass.contains('year')
          ? (UI.generalCategory = 'year')
          : targetClass.contains('month')
          ? (UI.generalCategory = 'month')
          : (UI.generalCategory = 'all');

        if (!newTodoLi.classList.contains('hidden'))
          general.toggleHidden(newTodoLi);

        UI.selectedCategoryEventListener();
        UI.renderTodoList();
      });
    });
  }

  static renderModifyTodoForm(todoNode) {
    const title = todoNode.childNodes[3].textContent;
    const date = todoNode.childNodes[5].textContent;
    const priority = todoNode.classList.value.slice(5);
    const checked =
      todoNode.childNodes[1].classList.contains('checked--btn');

    const index = todos.getIndex(todoNode);

    const li = document.createElement('li');
    const html = `
    <form class="modified-todo-form ${
      checked === true ? 'true' : 'false'
    }" data-index="${index}">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        minlength="3"
        value="${title}"
        required
      />
      <label for="date">Date</label>
      <input type="date" id="date" name="date" value="${todos.inputFormattedDate(
        date
      )}" required />
      <label for="priority">Priority</label>
      <select id="priority" name="priority">
        <option value="high" ${
          priority.includes('high') ? 'selected' : ''
        }>High</option>
        <option value="normal" ${
          priority.includes('normal') ? 'selected' : ''
        }>Normal</option>
        <option value="low" ${
          priority.includes('low') ? 'selected' : ''
        }>Low</option>
      </select>
      <button>OK</button>
  </form>`;
    li.classList.add('new-todo');
    li.insertAdjacentHTML('afterbegin', html);
    todoNode.closest('#todo-list').replaceChild(li, todoNode);
  }

  static renderModifiedTodo(form) {
    const title = form.childNodes[3].value;
    const date = form.childNodes[7].value;
    const priority = form.childNodes[11].value;
    const index = form.dataset.index;
    const checked = form.classList.contains('true');

    todos.modifyTodo(index, title, date, priority);
    storage.modifyArray('todos', todos.todoList);

    const li = document.createElement('li');
    const html = `
          <div class="check ${
            checked === true ? 'checked--btn' : ''
          }"></div>
            <h3>${title}</h3>
            <p>${todos.getFormattedDate(date)}</p>
            <div class="span-todo-list">
              <i class="edit outline icon"></i>
              <i class="trash delete-todo alternate outline icon"></i>
            </div>
            <div class="delete-request hidden"></div>
    `;
    li.classList.add('todo');
    li.classList.add(priority);
    checked === true ? li.classList.add('checked--list') : null;
    li.dataset.index = index;
    li.insertAdjacentHTML('afterbegin', html);
    form.closest('#todo-list').replaceChild(li, form.closest('li'));
  }

  static renderTodoList() {
    general.clearMainDisplay();
    if (todos.todoList.length !== 0) {
      todos.todoList.map((todo, i) => {
        if (
          UI.generalCategory === 'today'
            ? dates.compareDay(new Date(), todo)
            : UI.generalCategory === 'month'
            ? dates.compareMonth(new Date(), todo)
            : UI.generalCategory === 'year'
            ? dates.compareYear(
                new Date().getFullYear(),
                todos.getTodoYear(todo)
              )
            : UI.generalCategory === 'all'
            ? true
            : false
        )
          UI.renderTodo(todo, i);
        else if (UI.generalCategory.includes('project')) {
          const projectName = UI.generalCategory.slice(7);

          if (todo.category === projectName) UI.renderTodo(todo, i);
        }
      });
    }
  }

  static renderTodo(todo, i) {
    const html = `<li class="todo ${todos.getPriority(
      todo
    )} ${todos.getCheckedList(todo)}" data-index="${i}">
                  <div class="check ${todos.getCheckedButton(
                    todo
                  )}"></div>
                    <h3>${todos.getTitle(todo)}</h3>
                    <p>${todos.getFormattedDate(todo.date)}</p>
                    <div class="span-todo-list">
                      <i class="edit outline icon"></i>
                      <i class="trash delete-todo alternate outline icon"></i>
                    </div>
                    <div class="delete-request hidden"></div>
                </li>`;
    mainTodos.insertAdjacentHTML('beforeend', html);
  }

  /* ------------------------ PROJECTS UI  ------------------------ */

  static addProjectEventListener() {
    btnNewProject.addEventListener('click', () => {
      projectList.appendChild(newProjectForm);
      general.toggleHidden(newProjectForm);
    });
  }

  static exitNewProjectEventListener() {
    exitNewProject.addEventListener('click', (e) => {
      const li = e.target.closest('li');

      general.toggleHidden(li);
    });
  }

  static deleteProjectEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('delete-project')) return;

      const confirm = e.target.nextElementSibling;

      UI.hideConfirmsDeleteProject();

      general.toggleHidden(e.target);
      general.toggleHidden(confirm);

      UI.hideConfirmDeleteProjectEventListener(e.target);
      UI.confirmDeleteProjectEventListener();
      UI.deleteProject = true;
    });
  }

  static confirmDeleteProjectEventListener() {
    document
      .querySelectorAll('.confirm-delete-project')
      .forEach((btn) => {
        btn.addEventListener('click', () => {
          const i = btn.closest('li').dataset.index;

          projects.deleteProject(i);
          storage.modifyArray('projects', projects.projectList);

          if (!newProjectForm.classList.contains('hidden'))
            general.toggleHidden(newProjectForm);
          UI.renderProjectList();
        });
      });
  }

  static hideConfirmDeleteProjectEventListener(trash) {
    document.addEventListener('click', (e) => {
      const guardClause = e.target.closest('li');

      if (UI.deleteForm === false) return;

      // If the user click anywhere but on a todo element
      if (guardClause === null) {
        UI.hideConfirmsDeleteProject();
        UI.deleteProject = false;
      }
    });
  }

  static hideConfirmsDeleteProject() {
    document
      .querySelectorAll('.confirm-delete-project')
      .forEach((btn) => {
        if (!btn.classList.contains('hidden')) {
          const trash = btn.previousElementSibling;
          general.toggleHidden(btn);
          if (trash.classList.contains('hidden'))
            general.toggleHidden(trash);
        }
      });
  }

  static createNewProjectEventListener() {
    newProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const projectName = projectInput.value;

      projects.createProject(projectName);
      storage.modifyArray('projects', projects.projectList);

      general.clearProjectInputField();
      general.toggleHidden(newProjectForm);

      UI.renderProjectList();
    });
  }

  static renderProjectList() {
    general.clearProjectDisplay();
    if (projects.projectList.length !== 0) {
      projects.projectList.map((project, i) => {
        const selected = UI.generalCategory.slice(7) === project;
        const html = `
        <li class="project" data-index="${i}">
        <p class="project-name ${
          selected ? 'selected-project' : ''
        }">${project}</p>
        <i class="trash delete-project alternate outline icon"></i>
        <div class="confirm-delete-project hidden">
        Delete
      </div>
      </li>`;
        projectList.insertAdjacentHTML('beforeend', html);
      });
    }
  }

  static selectProjectCategoryEventListener() {
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('project-name')) return;

      const projectName = e.target.textContent;

      UI.generalCategory = 'project' + projectName;
      UI.selectedProjectEventListener();
      UI.renderTodoList();
    });
  }

  static selectedProjectEventListener() {
    document.querySelectorAll('.project-name').forEach((project) => {
      const categoryName = UI.generalCategory.slice(7);

      if (project.textContent === categoryName)
        project.classList.add('selected-project');
      else project.classList.remove('selected-project');

      general.hideGeneralBtnsSelected();
    });
  }
}
