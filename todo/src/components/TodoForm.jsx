import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()
    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        addTodo({todo: todo, completed: false})
        setTodo("")
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // jo bhi value likhenge wo todo ke andar chala jayega
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

// submit karne pe addtodo call kar rhe aur add todo me add karke input field empty kar dee rhe  using stetTodo = ""

// pehle value me todo ka value dedo joki null hai starting me then onChange pe setTodo rendering property ko handle karega and then todo me vo value daaalta chala jayega

export default TodoForm;