import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Modal = ({ category, closeModal, addToDo }) => {
  //created a state object (i think this is right)
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // handle change for title input
  const handleTitle = (event) => {
    setTodo({ ...todo, title: event.target.value });
  };

  // handle change for description input
  const handleDescription = (event) => {
    setTodo({ ...todo, description: event.target.value });
  };

  // handle submit of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    //addToDo({...todo})
    //setSubmitted(true);

    //reset todo input
    //setTodo({...todo, title: "", description: ""});
    
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3 className="heading">Create New Task</h3>
        <label htmlFor="Title">Title</label>

        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleTitle}
        />
        {submitted && !todo.title ? <span>Please enter title</span> : null}

        <label htmlFor="desc">Description</label>

        <input
          type="text"
          name="description"
          value={todo.description}
          onChange={handleDescription}
        />
        {submitted && !todo.description ? (
          <span>Please enter description</span>
        ) : null}

        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
    
  );
};

export default Modal;
