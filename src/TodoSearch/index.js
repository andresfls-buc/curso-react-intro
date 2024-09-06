import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  // Use the useContext hook to get context values and functions
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      className="todo-search"
      placeholder="Task filter"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
