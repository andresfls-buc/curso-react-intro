import React, { useContext } from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { LoadingSpinner } from "../LoadingSpinner";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

function AppUI() {
  // Use the useContext hook to get context values
  const {
    loading,
    error,
    searchedTodos,
    searchValue,
    completeTodo,
    deleteTodo,
    showCongrats,
    totalTodos,
    closeCongratsMessage,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  // Define the conditions that depend on context values
  const showEmptyTodos =
    !loading &&
    !error &&
    searchedTodos.length === 0 &&
    searchValue.trim() === "";

  return (
    <>
      <TodoCounter />
      <TodoSearch />

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

      {showCongrats && (
        <div className="congratulations-modal">
          <div className="congratulations-content">
            <h2>Congratulations!</h2>
            <p>You've completed all {totalTodos} of your todos for the day!</p>
            <button onClick={closeCongratsMessage}>Close</button>
          </div>
        </div>
      )}

      <CreateTodoButton />
      {openModal && <Modal>La funcionalidad de agregar TODO</Modal>}
    </>
  );
}

export { AppUI };
