import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";

//This works for any todo list category at the moment
//It holds the todo items for a specific category
const TodoList = ({category}) => {


  return (
    <div>
      <h4>Tasks</h4>
      <ul>
        <TodoItem />
      </ul>
    </div>
  );
};

export default TodoList;
