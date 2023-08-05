import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 기초',
            checked: true
        },
        {
            id: 2,
            text: '리액트 스타일링',
            checked: true
        },
        {
            id: 3,
            text: '리액트 실습',
            checked: false
        },
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false
        }

        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);

    const onRemove = useCallback((id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }, [todos]);

    const onToggle = useCallback(id => {
        const newTodos = todos.map(todo => (
            (todo.id === id) ? {...todo, checked: !todo.checked } : todo
        ));

        setTodos(newTodos);
    }, [todos]);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;