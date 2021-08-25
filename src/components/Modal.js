import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Modal = (props) => {

  //created a state object
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // handle change for title input
  const handleTitle = (event) => {
    setValues({ ...values, title: event.target.value });
  };

  // handle change for description input
  const handleDescription = (event) => {
    setValues({ ...values, description: event.target.value });
  };

  // handle submit of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(props.category);
    
  };

  const pass = () => {};

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3 className="heading">Create New Task</h3>
        <label htmlFor="Title">Title</label>

        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleTitle}
        />
        {submitted && !values.title ? <span>Please enter title</span> : null}

        <label htmlFor="desc">Description</label>

        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleDescription}
        />
        {submitted && !values.description ? (
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
