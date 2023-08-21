
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { todoContext } from "../../App";
import TodoItems from "../../components/TodoItems";

function CompletedTodo() {
  const { todos, setTodos } = useContext(todoContext);
  const completedTodos = todos.filter((todo) => todo.completed);
  const deleteTodo = todos.filter((todo) => todo.id);

  const handleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleDeleteAll = (id) => {
    setTodos(todos.filter((todo) => todo.id === id));
  };

  return (
    <div className="completed-todo">
      <h1>#todo</h1>
      <div className="todo-container">
        <div className="links">
          <NavLink className="alink" to="/">
            All
          </NavLink>
          <NavLink className="alink" to="/active">
            Active
          </NavLink>
          <NavLink className="alink" to="/completed">
            Completed
          </NavLink>
        </div>
        <div className="line"></div>
        {completedTodos.map((todo, index) => (
          <TodoItems
            handleCompleted={() => handleCompleted(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            completed={todo.completed}
            task={todo.task}
            key={index}
          />
        ))}
       
      </div>
      <button
        onClick={() => handleDeleteAll(deleteTodo)}
        className="deleteAll-btn"
      >
        Clear All
      </button>
    </div>
  );
}

export default CompletedTodo;
