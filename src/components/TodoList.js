import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";
import TodoItem from "./TodoItem";
// import TodoItem from "./TodoItem";

const TodoList = ({ category }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false); //state for the modal

  const toggle = () => {
    setmodalIsOpen(!modalIsOpen);
  };

  const [todos, setTodos] = useState([]); //state for the task list

  const deleteTask = () => {};

  //REVIEW THIS BECAUSE THIS IS WHAT WORKS OMFG THANKS YOUTUBE!!!!
  const addTask = (taskObj) => {
    let tempList = todos;
    tempList.push(taskObj);
    setTodos(todos);
    toggle();
  };

  const todoItems = todos.map((todo) => (
    <TodoItem key={todo.id} title={'hi'} />
  ));

  return (
    <div>
      <div className="todo-category">
        <h4 className="category-name">{category}</h4>
        <button className="task-btn" onClick={toggle}>
          New Task
        </button>
      </div>
      {modalIsOpen ? <Modal closeModal={toggle} addToList={addTask} /> : null}

      {/* makes it so that when you click on the overlay it closes the modal */}
      {modalIsOpen ? <Overlay onClick={toggle} /> : null}
      <h4>Tasks</h4>

      {console.log(todos.length)}

      {/* {todos.map((todo) => {
        <TodoItem title={todo.title} />;
      })} */}
      {todoItems}
    </div>
  );
};

export default TodoList;
