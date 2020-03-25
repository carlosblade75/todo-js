export class Todo {

    static fromJSON({ id, tarea, completado, creado }){

        const todoCreated = new Todo(tarea);
        todoCreated.id = id;
        todoCreated.completado = completado;
        todoCreated.creado = creado;

        return todoCreated;
    }

    constructor( tarea){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirTarea(){
        console.log(`${this.id} - tarea: ${ this.tarea}`);
    }
}