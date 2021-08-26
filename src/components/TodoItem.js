import React from "react";

const TodoItem = ({ title, deleteTask, id }) => {
  return (
    <div className="card">
      <p>{title}</p>

      <div className="actions">
        <button className="delete-btn" onClick={()=> deleteTask(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
