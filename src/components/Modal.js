import React from "react";
import { useState } from "react";

const Modal = ({ addToList }) => {
  //created a state object for the todo
  const [todo, setTodo] = useState("");

  // const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    //SAVE THE TODOS
    //setTodos([...todos].concat(newTodo));

    addToList(newTodo);

    //reset input
    setTodo("");
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3 className="heading">Create New Task</h3>
        <label htmlFor="Title">Title</label>

        <input
          type="text"
          name="title"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />

        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Modal;
