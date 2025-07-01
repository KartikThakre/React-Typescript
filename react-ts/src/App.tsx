
import "./App.css";
import Todos from "./components/Todos";
import NewTodos from "./components/NewTodos";
import { TodosContextProvider } from "./store/Todos-Context";

function App() {
  
  return (
    <TodosContextProvider>
      <NewTodos  />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
