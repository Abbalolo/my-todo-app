

// eslint-disable-next-line react/prop-types
function TodoForm({ inputValue, setInputValue, handleSubmit }) {
  return (
      <form onSubmit={handleSubmit}>
          <input
        className="input-text"
        type="text"
        placeholder="add details"
        onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              required
      />
      <button className="add-btn" type="submit">Add</button>
    </form>
  );
}

export default TodoForm