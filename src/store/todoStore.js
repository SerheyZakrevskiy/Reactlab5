import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}

const todoStore = new TodoStore();
export default todoStore;
