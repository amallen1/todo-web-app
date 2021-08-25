import React from "react";

const TodoItem = ({ title, description }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="actions">
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
