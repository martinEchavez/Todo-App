import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <>
            {
                todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </>
    )
};

export default TodoList;

TodoList.propType = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}