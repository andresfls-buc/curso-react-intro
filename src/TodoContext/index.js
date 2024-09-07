import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos = [], // Default to empty array if not provided
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [showCongrats, setShowCongrats] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text ? todo.text.toLowerCase() : "";
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    if (todoIndex >= 0) {
      newItem[todoIndex].completed = true;
      saveTodos(newItem);

      if (newItem.filter((todo) => !!todo.completed).length === totalTodos) {
        setShowCongrats(true);
      }
    }
  };

  const deleteTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    if (todoIndex >= 0) {
      newItem.splice(todoIndex, 1);
      saveTodos(newItem);
    }
  };

  const closeCongratsMessage = () => setShowCongrats(false);

  useEffect(() => {
    if (showCongrats) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showCongrats]);

  // The provider should always return children and pass the context values
  return (
    <TodoContext.Provider
      value={{
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
        setOpenModal,
        openModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
