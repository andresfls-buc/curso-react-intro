import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { LoadingSpinner } from "../LoadingSpinner";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  searchedTodos,
  setSearchValue,
  deleteTodo,
  completeTodo,
  showCongrats,
  closeCongratsMessage,
}) {
  // Determine if the empty todos message should be shown
  const showEmptyTodos =
    !loading &&
    !error &&
    searchedTodos.length === 0 &&
    searchValue.trim() === "";

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <LoadingSpinner />}
        {error && <TodosError />}
        {showEmptyTodos && <EmptyTodos />}
        {searchedTodos.length > 0 &&
          searchedTodos.map((todo, index) => (
            <TodoItem
              key={todo.id ? todo.id : index} // Ensure 'id' is unique or use index if no unique id
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>

      <CreateTodoButton />

      {showCongrats && (
        <div className="congratulations-modal">
          <div className="congratulations-content">
            <h2>Congratulations!</h2>
            <p>You've completed all {totalTodos} of your todos for the day!</p>
            <button onClick={closeCongratsMessage}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export { AppUI };
