import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice";

export default function AddTodo(){
    const dispatch = useDispatch()
    const [inputText,setInputText] = React.useState('')
    const addTodoList = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputText))
        setInputText('')
    }

    return(
        <form onSubmit={addTodoList} className="addTodoForm">
            <input
                className="todoInput"
                type="text"
                placeholder="Enter a todo"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                required
            />
            <button className="addTodoBtn"
                type="submit"
            >Add Todo</button>
        </form>
    )
}