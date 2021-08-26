import React from "react";
import TodoList from "./TodoList";

const TodoSection = () => {
  return (
    <div className="todo-section">
      <h1>TodoList</h1>
      <h3 className="instructions">
        Click “new task” to add a task to the specified list
      </h3>

      <div className="container">
        <TodoList category="To Do" />
        <TodoList category="In Progress" />
        <TodoList category="Completed" />
      </div>
    </div>
  );
};

export default TodoSection;
