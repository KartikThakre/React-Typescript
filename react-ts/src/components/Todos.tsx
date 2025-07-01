import React, { useContext } from "react";
// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/Todos-Context";

// ? React.FC is a type for functional components in React using TypeScript
//? Here we are using Todo as a class to define the structure of a todo item


//? as using the context API we don't need to pass the items and onRemoveTodo as props
//? we can directly access the context using useContext hook  
// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props
// ) => {


//? Why use bind?

// removeTodo expects an id argument.
// If you wrote onRemoveTodo={todosContext.removeTodo(item.id)}, it would call the function immediately, not on click.
// By using bind(null, item.id), you create a new function that, when called (e.g., on a button click inside TodoItem), will call removeTodo with item.id as its argument.
// In short:
// bind ensures the correct id is passed to removeTodo when the event happens, not when the component renders.




  const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <div>
      <ul className={classes.todos}>
        {todosContext.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
