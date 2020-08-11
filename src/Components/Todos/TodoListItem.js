import React from 'react';
import { Link } from 'react-router-dom';

const TodoListItem = ({ todo, handleDelete, handleToggle }) => {
    return (
        <div className="card mt-2" key={todo.id}>
            <div className="card-header d-flex justify-content-between">
                <h4>{todo.title}</h4>
                <Link
                    style={{color: 'Tomato'}}
                    to="#"
                    onClick={() => handleDelete(todo.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </Link>
            </div>
            <div className="card-body d-flex justify-content-between">
                <p className={`${todo.done && 'complete'}`}> {todo.description} </p>
                <Link
                    style={{color: 'green'}}
                    to="#"
                    onClick={() => handleToggle(todo.id)}
                >
                    <i className="fas fa-check-square"></i>
                </Link>
            </div>
        </div>
    );
};

export default TodoListItem;