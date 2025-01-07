import { createContext, useContext} from "react"

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo message",
            completed:false
        }
    ],
    // relate to Backend: write the controllers for the above model
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider