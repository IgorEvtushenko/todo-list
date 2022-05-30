import Check from './Check'
import {BsTrash} from 'react-icons/bs'

export default function TodoItem({todo, changeTodo, removeTodo}){
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-700 p-5 w-full'>
            <Check changeTodo={changeTodo} todo={todo}/>
            <span className={`${todo.isComplited ? 'line-through' : ''}`}>
                {todo.title}
            </span>
            <button onClick={()=>{removeTodo(todo._id)}}>
                <BsTrash
                    size={24}
                    className="text-gray-400 hover:text-red-500 transition-colors
                    ease-in-out duration-300"
                />
            </button>
        </div>
    )
}