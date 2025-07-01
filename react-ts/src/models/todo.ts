//? This file defines a Todo class that represents a todo item with an id and text.
//? The id is generated using the current date and time in ISO format.
//? The text is the content of the todo item.
//? This class can be used to create instances of todo items in a todo application.
// class Todo{
//     id: string;
//     text: string;   

//     constructor(todoText: string) {
//         this.text = todoText;
//         this.id = new Date().toISOString();
//     }
// }

// export default Todo;


//? we can also use an interface to define the structure of a todo item
//? but using a class allows us to create an instance of the Todo class and use it
export interface Todo {
  id: string;
  text: string;
}