import { Todo, TodoList } from "../classes"; /* si no ponemos nada mas coge por defecto el fichero index.js*/
import { todoList } from '../index.js';

const divTodoList       = document.querySelector('.todo-list');
const textInput         = document.querySelector('.new-todo');
const btnDelete         = document.querySelector('.clear-completed');
const urlFiltros        = document.querySelector('.filters');
const anchorFiltros     = document.querySelectorAll('.filtro');

export const createTodoHTML = (todo) => {

    const htmlTodo =   `<li class="${ todo.completado ? 'completed' : '' }" data-id="${ todo.id}">
                            <div class="view">
                                <input class="toggle" type="checkbox" ${ todo.completado ? 'checked' : '' }>
                                <label>${ todo.tarea }</label>
                                <button class="destroy"></button>
                            </div>
                            <input class="edit" value="Create a TodoMVC template">
                        </li>`;

    const div = document.createElement('div');

    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div;
};

textInput.addEventListener('keyup', ( event) => {

    if (event.keyCode === 13 && textInput.value.length > 0){

        const newTodo = new Todo(textInput.value);

        textInput.value = '';

        todoList.newTodo(newTodo);
        
        createTodoHTML(newTodo);
    }
});

divTodoList.addEventListener('click', (event) => {

    const nombreElement = event.target.localName;
    const todoElement   = event.target.parentElement.parentElement;
    const todoId        = todoElement.getAttribute('data-id');

    if ( nombreElement.includes('input')){

        todoList.toogleTodo(todoId);
        todoElement.classList.toggle('completed');
    }
    else if ( nombreElement.includes('button')){

        todoList.deleteTodo(todoId);

        divTodoList.removeChild(todoElement);
    }
});

btnDelete.addEventListener('click', (event) =>{

    todoList.deleteCompleted();

    for(let i= divTodoList.children.length -1; i >= 0; i--){

        const htmlTodo  = divTodoList.children[i];

        if ( htmlTodo.classList.contains('completed') ) {
            divTodoList.removeChild(htmlTodo);
        }
    }
});

urlFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;

    if (!filtro) { return;}

    anchorFiltros.forEach(element => element.classList.remove('selected'));

    event.target.classList.add('selected');
    
    for(const element of divTodoList.children){

        element.classList.remove('hidden');

        const completado = element.classList.contains('completed');

        switch( filtro ){

            case 'Pendientes':
                if (completado){
                    element.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado){
                    element.classList.add('hidden');
                }
                break;
        }
    }
});