import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const createBulkTodos = () => {
    const array = [];

    for(let i=1; i<=2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false
        })
    }

    return array;
}

const todoReducer = (todos, action) => {
    switch(action.type) {
        case 'INSERT':
            // { type: 'INSERT', todo: {id: 1, text: 'todo', checked: false} }
            return todos.concat(action.todo);
        case 'REMOVE':
            // { type: 'REMOVE', id: 1 }
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE': 
            // { type: 'TOGGLE', id: 1 }
            const newTodos = todos.map(todo => (
                (todo.id === action.id) ? {...todo, checked: !todo.checked } : todo
            ));

            return newTodos;
        default:
            return todos;
    }
}

const App = () => {
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         text: '리액트 기초',
    //         checked: true
    //     },
    //     {
    //         id: 2,
    //         text: '리액트 스타일링',
    //         checked: true
    //     },
    //     {
    //         id: 3,
    //         text: '리액트 실습',
    //         checked: false
    //     },
    // ]);

    // const [todos, setTodos] = useState(createBulkTodos);
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);


    const nextId = useRef(2501);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text: text,
            checked: false
        }

        // setTodos(todos.concat(todo));
        // setTodos(todos => todos.concat(todo));
        
        dispatch({ type: 'INSERT', todo });
        nextId.current += 1;
    }, []);

    const onRemove = useCallback((id) => {
        // setTodos(todos.filter((todo) => todo.id !== id));
        // setTodos(todos => todos.filter((todo) => todo.id !== id));
        dispatch({ type: 'REMOVE', id });
    }, []);

    const onToggle = useCallback(id => {
        // const newTodos = todos.map(todo => (
        //     (todo.id === id) ? {...todo, checked: !todo.checked } : todo
        // ));

        // setTodos(newTodos);
        // setTodos(todos => {
        //     const newTodos = todos.map(todo => (
        //         (todo.id === id) ? {...todo, checked: !todo.checked } : todo
        //     )); 

        //     return newTodos; 
        // });
        dispatch({ type: 'TOGGLE', id });

    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;