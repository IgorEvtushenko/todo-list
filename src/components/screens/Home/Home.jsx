import TodoItem from './TodoItem/TodoItem'
import { useState } from 'react';
import CreateTodo from './CreateTodo/CreateTodo'

export default function Home (){
    const [state, setState] = useState([]);

    const changeTodo = (id) => {
        let copy = [...state];
        let curent = copy.find((elem) => elem._id === id);
        curent.isComplited = !curent.isComplited;
        setState(copy);
    };

    const removeTodo = (id) => {
        let copy = [...state].filter(elem => {
            return elem._id === id ? false : true
        });
        setState(copy);
    };

    const addTodo = (newTodo) => {
        let copy = [...state, newTodo]
        setState(copy)
    };

    return(
        <div className="text-white w-4/5 mx-auto">
            <h1 className='text-2xl font-bold text-center mb-8'>Todo list</h1>
            <CreateTodo addTodo={addTodo}/>
            {state.map((todo) => <TodoItem
            key={todo._id}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
            />)}
        </div>
    )
};