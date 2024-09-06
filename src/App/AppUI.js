import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
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

export { AppUI };
