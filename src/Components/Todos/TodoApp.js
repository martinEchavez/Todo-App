import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../Hooks/useForm';

const TodoApp = ({ handleAddTodo }) => {
    // Reducer para el manejo del formulario
    const [{title, description, state}, handleInputChange, reset] = useForm({
        title: '',
        description: '',
        state: false
    })

    // Crear una nueva tarea
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            title,
            description,
            done: state
        }
        handleAddTodo(newTodo)
        reset();
    }
    return (
        <div className="card mt-2">
            <div className="card-header">
                <h4>Ingresa la tarea</h4>
            </div>
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
    );
};

export default TodoApp;

TodoApp.propTypes = {
    handleAddTodo: PropTypes.func.isRequired,
}