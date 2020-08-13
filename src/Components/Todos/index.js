import React, { useReducer, useEffect } from 'react';
import { todoReducer } from '../../reducer/todoReducer';
import TodoList from './TodoList';
import TodoApp from './TodoApp';
import '../../css/style.css';

// Estado inicial del la aplicación
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const Todos = () => {
    // Reducer alternativo al useState
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    // Se ejecuta cada vez que se presenta un cambio en las tareas
    useEffect(() => {
        // Se Almacenan los datos en localStorage
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            payload: id
        });
    }

    // Se cambia el estado de la tarea
    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    // Recibe los datos para agregar una tarea
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <TodoApp
                        handleAddTodo={handleAddTodo}
                    />
                </div>
                <div className="col-md-8">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
            </div>
        </div>
    );
};

export default Todos;