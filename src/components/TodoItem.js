import React from "react";
import Modal from "./Modal";

const TodoItem = ({title, description, category}) => {
  const deleteHander = () => {
    console.log("delete");
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="actions">
        <button className="delete-btn" onClick={deleteHander}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
