import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './css/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {

    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onClick = useCallback(e => {
        onInsert(value);
        setValue('');

        e.preventDefault();     // 새로고침 방지

    }, [onInsert, value]);

    return (
        <form className='TodoInsert'>
            <input 
                placeholder='할 일을 입력하세요.'
                value={value}
                onChange={onChange}
            />
            <button 
                type='submit'
                onClick={onClick}>
                    <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;