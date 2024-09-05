import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { useLocalStorage } from "./useLocalStorage";
import "./App.css";

// const defaultTodos = [
//   { text: "Defeat all enemies", completed: true },
//   { text: "Tomar el curso de Intro a React.js", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

// Esto es un custom hooks

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
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

export default App;
