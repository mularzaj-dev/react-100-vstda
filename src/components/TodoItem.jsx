import { useState } from "react"
function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)
  const [editedPriority, setEditedPriority] = useState(todo.priority)
  
  
  return  (
  <>
    {isEditing ? ( 
       <div className="edit-form"> 
         <label>Description</label> 

          <textarea 
           data-testid="update-todo-text"
           value={editedText}
           onChange={(e) => setEditedText(e.target.value)}
           ></textarea>

        <label>Priority</label>
        <select
         data-testid="update-todo-priority"
         value={editedPriority}
         onChange={(e) => setEditedPriority(Number(e.target.value))}
        >
          <option value={1}>1 - High</option>
          <option value={2}>2 - Medium</option>
          <option value={3}>3 - Low</option>
        </select>

        <button 
        data-testid="update-todo"
        onClick={()=> { 
          updateTodo(todo.id, {
            text: editedText,
            priority: editedPriority,
          }) 
          setIsEditing(false)
        }}
        >
          Save
        </button>
       </div>
    ): (
     
    <div 
    data-testid="todo-item"
    className={
      todo.priority === 1
      ? "priority-high"
      : todo.priority === 2
      ? "priority-medium"
      : "priority-low"
    }>
      <input type="checkbox"
      checked={todo.completed}
      onChange={() => 
        updateTodo(todo.id, {
          completed: !todo.completed
        })
      }
       />

      <span
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>

      <span>
        {todo.priority === 1
        ? "1 - High"
        : todo.priority === 2
        ? "2 - Medium"
        : "3 - Low"}
      </span>

      <a 
      href="#"
      data-testid="edit-todo"
      onClick={(e) => { 
        e.preventDefault()
        setIsEditing(true)
      }}
      >
        Edit
      </a>

      {" | "}
      <a 
      href="#"
      data-testid="delete-todo"
      onClick={(e) => { 
        e.preventDefault()
        deleteTodo(todo.id)
      }}
      >
        Delete
      </a> 
      </div>
    )}
  
  </>
)};

export default TodoItem;
