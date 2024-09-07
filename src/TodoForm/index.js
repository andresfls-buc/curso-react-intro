import React from "react";
import "./TodoForm.css";

function TodoForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder=" escribe" />
      <button
        type=""
        className="TodoForm-button
            TodoForm-button--cancel"
      >
        {" "}
        Cancelar
      </button>
      <button
        type="submit"
        className="TodoForm-button
            TodoForm-button--add"
      >
        Anadir
      </button>
    </form>
  );
}

export { TodoForm };
