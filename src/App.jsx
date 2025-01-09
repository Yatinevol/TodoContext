import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

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

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length > 0){
    setTodos(todos)
  }

},[])


useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-7xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((eachValue)=> (
                          <div key={eachValue.id} className="w-full">
                            <TodoItem todo={eachValue}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
