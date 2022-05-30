import {BsCheck} from 'react-icons/bs'

export default function Check({changeTodo, todo}){
    return (
        <button
            className={`border-2 rounded-lg ${todo.isComplited ? 'bg-pink-400' : ''} border-pink-400 w-6
            h-6 mr-3 flex items-center justify-center`}
            onClick={()=>{changeTodo(todo._id)}}
        >
            {todo.isComplited && <BsCheck size={24} className="text-gray-900" />}
        </button>
    )
}