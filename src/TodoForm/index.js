import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    // addTodo
    setOpenModal,
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Create your new TODO'S</label>
      <textarea placeholder=" Write your new TODO's" />
      <button
        type="button"
        className="TodoForm-button
            TodoForm-button--cancel"
        onClick={onCancel}
      >
        {" "}
        Cancel
      </button>
      <button
        type="submit"
        className="TodoForm-button
            TodoForm-button--add"
      >
        Add
      </button>
    </form>
  );
}

export { TodoForm };
