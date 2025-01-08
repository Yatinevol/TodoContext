import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
// todos is the array containing all the todo objects.
const [todos,setTodos] = useState([])

// todo is not taken from the state. yeh toh vo task ya message hai jo user pass karega.{ ...prevTodos ka matlab purane saare objects ko spread karna}.
const addTodo = (todo)=>{
  setTodos((prevTodos)=> [{id:Date.now(),...todo},...prevTodos])
}

const updateTodo = (id,todo)=>{
  setTodos((prevTodos)=> prevTodos.map((eachValue) => (eachValue.id === id ? todo: eachValue)))
}

const deleteTodo = (id)=>{
  setTodos((prevTodos)=> prevTodos.filter((eachValue)=> eachValue.id !== id))
}

const toggleComplete = (id)=>{
  setTodos((prevTodos)=> prevTodos.map((eachValue)=> eachValue.id === id ? {...eachValue, completed: !eachValue.completed}: eachValue))
}


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
