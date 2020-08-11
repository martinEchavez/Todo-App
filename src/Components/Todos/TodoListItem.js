import React from 'react';

const TodoListItem = ({ todo, handleDelete, handleToggle }) => {
    return (
        <div className="card mt-2" key={todo.id}>
            <div className="card-header d-flex justify-content-between">
                <h4>{todo.title}</h4>
                <a
                    style={{color: 'Tomato'}}
                    href="#"
                    onClick={() => handleDelete(todo.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </a>
            </div>
            <div className="card-body d-flex justify-content-between">
                <p className={`${todo.done && 'complete'}`}> {todo.description} </p>
                <a
                    style={{color: 'green'}}
                    href="#"
                    onClick={() => handleToggle(todo.id)}
                >
                    <i className="fas fa-check-square"></i>
                </a>
            </div>
        </div>
    );
};

export default TodoListItem;