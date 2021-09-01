import React from "react";
import { useState} from "react";
// import { db } from "../config";
// import { collection, doc, addDoc, setDoc } from "firebase/firestore";

const Modal = ({ addToList, category }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
      category: category,
    };

    addToList(newTodo);

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
