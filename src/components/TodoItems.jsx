
import { BiTrashAlt } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function TodoItems({ task, completed, handleCompleted, handleDelete }) {
  return (
    <div className="todo-item-container">
      <div className="input-check">
        <input
          className="check"
          type="checkbox"
          checked={completed}
          onChange={handleCompleted}
        />
        <p>{task}</p>
      </div>
      {completed && ( // Conditionally render delete button for non-completed tasks
        <button onClick={handleDelete} className="delete-btn">
          <BiTrashAlt style={{ color: "#BDBDBD" }} />
        </button>
      )}
    </div>
  );
}

export default TodoItems;
