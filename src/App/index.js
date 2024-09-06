import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";
import { LoadingSpinner } from "../LoadingSpinner";
import { Footer } from "../Footer";
import "./App.css";

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: "Defeat all enemies", completed: true },
//   { text: "Tomar el curso de Intro a React.js", completed: false },
// { text: "Defeat Griffith", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// Esto es un custom hooks

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [showCongrats, setShowCongrats] = React.useState(false);

  const completedTodos = todos.filter((todos) => !!todos.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    newItem[todoIndex].completed = true;
    saveTodos(newItem);

    // Check if all todos are completed and show the message
    if (newItem.filter((todo) => !!todo.completed).length === totalTodos) {
      setShowCongrats(true);
    }
  };

  const deleteTodo = (text) => {
    const newItem = [...todos];
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  };

  const closeCongratsMessage = () => {
    setShowCongrats(false);
  };

  useEffect(() => {
    if (showCongrats) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showCongrats]);

  if (loading) {
    return <LoadingSpinner />; // Show spinner while loading is true
  }

  if (error) {
    return <p>Error loading todos...</p>; // Handle error case
  }

  return (
    <div className="app">
      <AppUI
        loading={loading}
        error={error}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        searchedTodos={searchedTodos}
        setSearchValue={setSearchValue}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        showCongrats={showCongrats}
        closeCongratsMessage={closeCongratsMessage}
      />
      <Footer />
    </div>
  );
}

export default App;
