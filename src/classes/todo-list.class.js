import { Todo } from ".";

export class TodoList {

    constructor(){
        this.loadFromLocalStore();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.saveToLocalStore();
    }

    deleteTodo (id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveToLocalStore();
    }

    toogleTodo (id) {

        for(const todo of this.todos){

            if (id == todo.id){
                todo.completado = true;4
                this.saveToLocalStore();
            }
        }
    }

    deleteCompleted () {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.saveToLocalStore();
    }

    saveToLocalStore(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadFromLocalStore(){

        this.todos =  localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
        this.todos = this.todos.map( obj => Todo.fromJSON(obj));  /*  this.todos = this.todos.map( Todo.fromJSON ) */
    }
}