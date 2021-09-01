import React from "react";
import trash from "../images/trash.svg";
import edit from "../images/edit.svg";

const TodoItem = ({ title, deleteTask, id }) => {
  return (
    <div className="card">
      <p>{title}</p>

      <div className="actions">
        {/* need to be able to edit also */}
        <img className="btns" src={edit} alt="edit button" />
        <img
          className="btns"
          src={trash}
          alt="trash button"
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
