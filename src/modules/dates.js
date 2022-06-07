import todos from './todos';

export default class dates {
  static compareDay(date, todo) {
    return (
      date.getDate() == todos.getTodoDay(todo) &&
      date.getMonth() == Number(todos.getTodoMonth(todo)) - 1 &&
      date.getFullYear() == todos.getTodoYear(todo)
    );
  }

  static compareMonth(date, todo) {
    return (
      date.getMonth() == Number(todos.getTodoMonth(todo)) - 1 &&
      date.getFullYear() == todos.getTodoYear(todo)
    );
  }

  static compareYear(year, todoYear) {
    return year == todoYear;
  }
}
