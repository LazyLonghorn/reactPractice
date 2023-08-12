import React, { useCallback, useRef, useState } from 'react';
import { produce } from 'immer';

const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: '', username: '' });
    const [data, setData] = useState({
        array: [],
        uselessValue: null
    });

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        // setForm({
        //     ...form,
        //     [name]: value
        // });

        setForm(
            // produce(form, draft => {
            //     draft[name] = value;
            // })
            produce(draft => {
                draft[name] = value;
            })
        );
    }, [form]);

    const onClick = useCallback(e => {
        e.preventDefault();

        const info = {
            id: nextId.current,
            name: form.name,
            username: form.username
        };

        // setData({
        //     ...data,
        //     array: data.array.concat(info)
        // });

        setData(
            // produce(data, draft => {
            //     draft.array.push(info);
            // })
            produce(draft => {
                draft.array.push(info);
            })
        );

        setForm({ name: '', username: '' });

        nextId.current += 1;
    }, [data, form.name, form.username]);

    const onRemove = useCallback((id) => {
        // setData({
        //     ...data,
        //     array: data.array.filter((info) => id !== info.id)
        // })
        setData(
            // produce(data, draft => {
            //     draft.array = draft.array.filter((info) => {
            //         console.log(id !== info.id)
            //         return id !== info.id
            //     })
            // })
            produce(draft => {
                draft.array = draft.array.filter((info) => {
                    console.log(id !== info.id)
                    return id !== info.id
                })
            })
        )
    }, [data]);
    

    return (
        <div>
            <form>
                <input 
                    name='username'
                    placeholder='ID'
                    value={form.username}
                    onChange={onChange}
                />
                <input 
                    name='name'
                    placeholder='Name'
                    value={form.name}
                    onChange={onChange}
                />
                <button onClick={onClick}>Add</button>
            </form>
            <div>
                <ul>
                    {data.array.map((info) => 
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default App;