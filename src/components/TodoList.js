import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";

const TodoList = () => {
  //add todos here, and map these out and render them?
  const [todos, setTodos] = useState([
    // {
    //   title: "girl",
    //   description: "bye",
    // },
    // {
    //   title: "girl",
    //   description: "hi",
    // },
  ]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const todoItems = todos.map(item => <TodoItem />)


  return (
    <div>
      <h4>Tasks</h4>

      {/* jokesData.map(joke =>  <Joke question={joke.question} punchLine={joke.punchLine} />) */}
      <TodoItem />


    </div>
  );
};

export default TodoList;
