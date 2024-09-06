import { AppUI } from "./AppUI";
import { Footer } from "../Footer";
import "./App.css";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <div className="app">
      <TodoProvider>
        <AppUI />
      </TodoProvider>
      <Footer />
    </div>
  );
}

export default App;
