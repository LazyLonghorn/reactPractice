import React, { useState } from 'react';

const FunctionEventPratice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + " : " + message);
        setForm({
            username: '',
            message: ''
        });
    }

    return (
        <div>
            <input
                type='text'
                name="username"
                placeholder='Input username'
                value={username}
                onChange={onChange}
            />
            <input
                type='text'
                name="message"
                placeholder='Input Message'
                value={message}
                onChange={onChange}
            />
            <button onClick={onClick}>Check</button>
        </div>
    );
};

export default FunctionEventPratice;