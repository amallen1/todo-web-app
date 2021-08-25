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
        <div className="category">
          <TodoList category="To Do" />
        </div>

        <div className="category">
          <TodoList category="In Progress" />
        </div>

        <div className="category">
          <TodoList category="Completed" />
        </div>
      </div>
    </div>
  );
};

export default TodoSection;
