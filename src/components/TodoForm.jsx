import { useState } from "react"
function TodoForm({ addTodo }) {
  const [text, setText] = useState("")
  const [priority, setPriority] = useState("1")  
 
 function handleSubmit(event) { 
  event.preventDefault()

  addTodo({
    id: Date.now(),
    text: text,
    priority: Number(priority),
    completed: false,
  }) 
  setText("")
  setPriority("1")
 }
 return (
<form className="todo-form" onSubmit={handleSubmit}>
      <h2>Add New Todo</h2>

      <label htmlFor="todo-text">
        I want to...
        </label>
      <br />

      <textarea 
        id="todo-text"
        data-testid="create-todo-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <br />
      <br />

      <label htmlFor="todo-priority">How much of a priority is this?
      </label>

      <br />

   <select
        id="todo-priority"
        data-testid="create-todo-priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        
        <option value="1">1 - High</option>
        <option value="2">2 - Medium</option>
        <option value="3">3 - Low</option>
      </select> 

      <br />
      <br />

      <button 
      type="submit"
      data-testid="create-todo"> Add</button>
</form>
  )
}

export default TodoForm;
