import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { todoContext } from "../../App";

function ActiveTodo() {
  const { todos } = useContext(todoContext);
  const activeTodos = todos.filter((todo) => !todo.completed); // Filter active todos

  return (
    <div className="active-todo">
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
        {activeTodos.map((todo, index) => (
          <div className="todo-item-container-active" key={index}>
            <input className="check" type="checkbox" />
            <p>{todo.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveTodo;
