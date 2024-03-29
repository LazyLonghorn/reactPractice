import React from 'react';
import TodoListItem from './TodoListItem';
import './css/TodoList.scss'

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className='TodoList'>
            {todos.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;    