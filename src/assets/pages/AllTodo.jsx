import { useState, useContext, useEffect } from "react";
import TodoForm from "../../components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import TodoItems from "../../components/TodoItems";
import { todoContext } from "../../App";

function AllTodo() {
  const [inputValue, setInputValue] = useState("");
  const { todos, setTodos } = useContext(todoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  const addTodo = (task) => {
    const newTodo = { id: uuidv4(), task, completed: false, edit: false };
    setTodos([...todos, newTodo]);
  };

  const handleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="all-todo">
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
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        {todos.map((todo) => (
          <TodoItems
            key={todo.id}
            handleCompleted={() => handleCompleted(todo.id)}
            completed={todo.completed}
            task={todo.task}
          />
        ))}
      </div>
    </div>
  );
}

export default AllTodo;
