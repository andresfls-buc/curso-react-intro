import React, { useContext } from "react";
import { TodoContext } from "../TodoContext"; // Correct import path
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext); // Access setOpenModal from context

  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((prevState) => !prevState); // Toggle modal state
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
