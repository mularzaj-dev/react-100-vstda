import './App.css'
import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  // Add your code here
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([...todos, todo])
  } 

  function deleteTodo(id) { 
    const updatedTodos = todos.filter((todo) => todo.id!==id)
    setTodos(updatedTodos)
  } 

  function toggleComplete(id) { 
    const updatedTodos = todos.map((todo) => { 
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(updatedTodos)
  } 

  function updateTodo(id, updates) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updates }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

return (
  <div className="app">
    <header className="app-header">
      <h1>Very Simple Todo App</h1>
      <p>Track all of the things.</p>
    </header>

    <div className="todo-layout">
      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  </div>
)
}

export default App
