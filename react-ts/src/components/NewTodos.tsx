import React from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/Todos-Context";

//? onAddTodo is a function that takes a string as an argument and returns void
// const NewTodos:React.FC<{onAddTodo : (text : string) => void}> = (props) => {

//? as we are using the context API we don't need to pass the onAddTodo as a prop
//? we can directly access the context using useContext hook
//? and use the addTodo function from the context to add a new todo
//? we can also use the useContext hook to access the items from the context
//? and display them in the Todos component
//? so we don't need to pass the items as a prop to the Todos component
//? we can directly access the items from the context using useContext hook
//? and display them in the Todos component
//? so we don't need to pass the items as a prop to the Todos component
const NewTodos: React.FC = () => {
  const todosContext = React.useContext(TodosContext); // Assuming TodosContext is imported from the context file

  const todoTextRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //? Summary:
    //? The ! is the non-null assertion operator, used to assure TypeScript that todoTextRef.current is not null at this point.

    const enteredText = todoTextRef.current!.value; // Using non-null assertion operator

    if (enteredText.trim().length === 0) {
      // Throw an error or show a message
      return;
    }

    //props.onAddTodo(enteredText); // Assuming onAddTodo is passed as a prop

    todosContext.addTodo(enteredText); // Using context to add todo
    todoTextRef.current!.value = ""; // Clear the input field after adding the todo
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodos;
