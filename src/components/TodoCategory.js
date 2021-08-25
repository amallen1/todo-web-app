import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const TodoCategory = ({ category }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos(todo, ...todos);
  };

  const openModal = () => {
    setmodalIsOpen(true);
  };

  const closeModal = () => {
    setmodalIsOpen(false);
  };

  return (
    <div>
      <div className="todo-category">
        <h4 className="category-name">{category}</h4>
        <button className="task-btn" onClick={openModal}>
          New Task
        </button>
      </div>
      {modalIsOpen ? (
        <Modal category={category} addToDo={addToDo} onSubmit={closeModal} />
      ) : null}
      
      {/* makes it so that when you click on the overlay it closes the modal */}
      {modalIsOpen ? <Overlay onClick={closeModal} /> : null}
      <TodoList category={category} />
    </div>
  );
};

export default TodoCategory;
