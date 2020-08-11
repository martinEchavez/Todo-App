import React from 'react';

const TodoListItem = ({ todo, handleDelete, handleToggle}) => {
    return (
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
    );
};

export default TodoListItem;