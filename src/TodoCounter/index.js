import React, { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  // Use the useContext hook to access the context values
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      You have completed <span>{completedTodos} </span> of{" "}
      <span>{totalTodos}</span> TODO'S
    </h1>
  );
}

export { TodoCounter };
