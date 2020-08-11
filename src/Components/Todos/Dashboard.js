import React, { useReducer, useEffect } from 'react';
import { todoReducer } from '../../reducer/todoReducer';
import { useForm } from '../../Hooks/useForm';
import '../../css/style.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const Dashboard = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{title, description, state}, handleInputChange, reset] = useForm({
        title: '',
        description: '',
        state: false
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            payload: id
        });
    }

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            title,
            description,
            done: state
        }
        dispatch({
            type: 'add',
            payload: newTodo
        });
        reset();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card mt-2">
                        <div className="card-header"> <h4>Ingresa la tarea</h4></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        className="form-control"
                                        name="title"
                                        onChange={handleInputChange}
                                        placeholder="Título"
                                        type="text"
                                        value={title}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        autoComplete="off"
                                        className="form-control"
                                        name="description"
                                        onChange={handleInputChange}
                                        rows="3"
                                        placeholder="Descripción"
                                        value={description}
                                    ></textarea>
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        checked={state}
                                        className="form-check-input"
                                        name="state"
                                        onChange={handleInputChange}
                                        type="checkbox"
                                    />
                                    <label className="form-check-label">Estado</label>
                                </div>
                                <button type="submit" className="btn btn-block btn-primary">Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    {
                        todos.map(todo => (
                            <div className="card mt-2" key={todo.id}>
                                <div className="card-header d-flex justify-content-between">
                                    <h4>{todo.title}</h4>
                                    <button
                                        className="btn btn-danger offset"
                                        onClick={() => handleDelete(todo.id)}
                                    >X</button>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <p className={`${todo.done && 'complete'}`}> {todo.description} </p>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleToggle(todo.id)}
                                    >Y</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;