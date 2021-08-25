import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";

const TodoCategory = ({ category }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

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
      {modalIsOpen ? <Modal category={category}/> : null}
      {/* makes it so that when you click on the overlay it closes the modal */}
      {modalIsOpen ? <Overlay onClick={closeModal} /> : null}
    </div>
  );
};

export default TodoCategory;
