
import React,{createContext} from "react";
import { Todo } from "../models/todo";

// this is the type alias for the context object
// it defines the structure of the context object that will be provided to the components
type TodoContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = createContext<TodoContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

//? children: React.ReactNode defines the type for the children prop.
//? In React, children represents any JSX or components nested inside <TodosContextProvider>...</TodosContextProvider>.
//? React.ReactNode is a type that covers anything that can be rendered in React (strings, numbers, JSX, arrays, etc.).

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({children}
) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => {
      //? while we can use the Todo class to create a new todo item by using the constructor
      //return [...prevTodos, new Todo(todoText)];
      //? we can also use an object literal to create a new todo item by using the interface
      //? this is a more concise way to create a new todo item
      return [...prevTodos, {
        id: new Date().toISOString(),
        text: todoText,
      },];
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue:TodoContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContextProvider, TodosContext };
