import { useState } from 'react';

export default function CreateTodo({addTodo}){
    const [state, setState] = useState('');

    const createTodo = (value) => {
        let newTodo = {
            _id: new Date(),
            title: value,
            isComplited: false
        }
        addTodo(newTodo);
        setState('');
    };

    return (
        <div className="flex items-center justify-between mb-4
        rounded-2xl bg-zinc-700 p-5 w-full">
            <input
                className="bg-transparent w-full border-none outline-none"
                value={state}
                onChange={e=>setState(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && createTodo(state)}
                placeholder='Enter todo'
            />
        </div>
    )
};