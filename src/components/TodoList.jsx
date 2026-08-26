import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <>
      <div className="welcome-message"> 
        <h2>View Todos</h2>

        {todos.length === 0 ? (
          <div> 
              <strong>Welcome to Very Simple Todo App!</strong>
              <p>Get started by adding a new todo on the left.</p>
          </div>
        ) : ( 
          <div> 
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TodoList;
