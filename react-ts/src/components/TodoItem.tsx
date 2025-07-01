import React from "react";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/Todos-Context";

//? we can also use the props directly in the function signature
//? but using destructuring is more readable and concise
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = ({text, onRemoveTodo}) => {
  return (
    <>
      <li className={classes.item} onClick={onRemoveTodo}>
        {text}
      </li>
    </>
  );
};

export default TodoItem;
