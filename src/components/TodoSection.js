import React from "react";
import TodoCategory from "./TodoCategory";
import TodoItem from "./TodoItem";

const TodoSection = () => {
  return (
    <div className="todo-section">
      <h1>TodoList</h1>
      <h3 className="instructions">
        Click “new task” to add a task to the specified list
      </h3>

      {/* maybe just make a bunch of todo Items? */}
      <div className="container">
        <div className="category">
          <TodoCategory category="To Do"/>
        </div>
        
      </div>
    </div>
  );
};

export default TodoSection;
