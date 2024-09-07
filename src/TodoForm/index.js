import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal, errorMessage, setErrorMessage, todos } =
    useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // Check for errors and show the error message
    if (!newTodoValue.trim()) {
      setErrorMessage("Please write something.");
      return;
    }

    // Check for duplicate todo
    const isDuplicate = todos.some(
      (todo) =>
        todo.text.trim().toLowerCase() === newTodoValue.trim().toLowerCase()
    );
    if (isDuplicate) {
      setErrorMessage("This todo already exists.");
      return;
    }

    // If no errors, add the todo and close the modal
    addTodo(newTodoValue);
    setNewTodoValue(""); // Clear the input field
    setErrorMessage(""); // Clear the error message
    setOpenModal(false); // Close the modal
  };

  const onCancel = () => {
    setOpenModal(false); // Close the modal
    setErrorMessage(""); // Clear the error message
    setNewTodoValue(""); // Clear the input value
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    // Clear the error message as soon as the user starts typing
    setErrorMessage("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="newTodo">Create your new TODO's</label>
      <textarea
        id="newTodo" // Ensure this ID is unique across the form
        name="newTodo" // This name helps with autofill and form data submission
        placeholder="Write your TODO's"
        value={newTodoValue}
        onChange={onChange}
      />
      {/* Conditionally display the error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button type="submit" className="TodoForm-button TodoForm-button--add">
        Add
      </button>
    </form>
  );
}

export { TodoForm };
