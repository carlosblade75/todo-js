
import './styles.css';
import { Todo, TodoList } from './classes'; /* si no ponemos nada mas coge por defecto el fichero index.js*/
import { createTodoHTML } from './js/componentes.js';

export const todoList = new TodoList();

todoList.todos.forEach(todo =>  createTodoHTML(todo)); /* todoList.todos.array.forEach(createTodoHTML) */

