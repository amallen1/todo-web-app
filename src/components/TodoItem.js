import React from "react";

const TodoItem = (props) => {
  const deleteHander = () => {
    console.log('delete')
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      <div className="actions">
        <button class="delete-btn" onClick={deleteHander}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
