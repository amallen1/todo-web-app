import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Overlay from "./Overlay";
import TodoItem from "./TodoItem";

const TodoList = ({ category }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false); //state for the modal

  const toggle = () => {
    setmodalIsOpen(!modalIsOpen);
  };

  const [todos, setTodos] = useState([]); //state for the task list

  //Delete tasks
  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //review code
  const addTask = (taskObj) => {
    // let tempList = todos;
    // tempList.push(taskObj);
    setTodos([...todos].concat(taskObj));
    toggle(); //closes the modal
  };

  const todoItems = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      title={todo.text}
      deleteTask={deleteTask}
      id={todo.id}
    />
  ));

  return (
    <div className="todo-list">
      <div className="todo-category">
        <h4 className="category-name">{category}</h4>
        <button className="task-btn" onClick={toggle}>
          New Task
        </button>
      </div>
      {modalIsOpen ? <Modal addToList={addTask} /> : null}
      {modalIsOpen ? <Overlay onClick={toggle} /> : null}
      {todoItems}
    </div>
  );
};

export default TodoList;
