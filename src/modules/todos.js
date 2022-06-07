export default class todos {
  static todoList = [];

  static createTodo(title, date, priority, id, checked, category) {
    return {
      title,
      date,
      priority,
      id,
      checked,
      category,
    };
  }

  static modifyTodo(index, title, date, priority) {
    const todo = this.todoList[index];
    todo.title = title;
    todo.date = date;
    todo.priority = priority;
  }

  static deleteTodo(index) {
    this.todoList.splice(index, 1);
  }

  static getTitle(todo) {
    return todo.title;
  }

  static getTodoDay(todo) {
    return todo.date.split('-')[2];
  }

  static getTodoMonth(todo) {
    const month = todo.date.split('-')[1].startsWith('0')
      ? todo.date.split('-')[1].replace('0', '')
      : todo.date.split('-')[1];
    return month;
  }

  static getTodoYear(todo) {
    return todo.date.split('-')[0];
  }

  static getFormattedDate(todoDate) {
    const year = todoDate.split('-')[0];
    const month = todoDate.split('-')[1];
    const day = todoDate.split('-')[2];
    return `${day}/${month}/${year}`;
  }

  static inputFormattedDate(todoDate) {
    const year = todoDate.split('/')[2];
    const month = todoDate.split('/')[1];
    const day = todoDate.split('/')[0];
    return `${year}-${month}-${day}`;
  }

  static getPriority = (todo) => {
    return todo.priority;
  };

  static getIndex = (node) => {
    return node.dataset.index;
  };

  static getCheckedList(todo) {
    return todo.checked === true ? 'checked--list' : '';
  }

  static getCheckedButton(todo) {
    return todo.checked === true ? 'checked--btn' : '';
  }

  static toggleCheck(btn, li) {
    const i = li.dataset.index;
    const todo = this.todoList[i];

    btn.classList.toggle('checked--btn');
    li.classList.toggle('checked--list');
    todo.checked = !todo.checked;
  }
}
