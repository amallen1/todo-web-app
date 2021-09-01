import React from "react";
import { useState, useEffect } from "react";
import TaskModal from "./TaskModal";
import Overlay from "./Overlay";
import TodoItem from "./TodoItem";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config";
import { collection, addDoc } from "firebase/firestore";

const TodoList = ({ category }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [dbID, setId] = useState("");
  // const [todos, setTodos] = useState([]);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const toggle = () => {
    setmodalIsOpen(!modalIsOpen);
  };

  const deleteTask = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    //doesnt save on refresh
    if (dbID) {
      console.log("truthy");
    } else {
      console.log("falsy");
    }

    console.log("Do these match? " + dbID);
    try {
      await deleteDoc(doc(db, category, dbID));
    } catch (e) {
      console.error("Error deleting docuemnt", e);
    }

    console.log("is the task deleted");
  };

  const addTask = (taskObj) => {
    setTodos([...todos].concat(taskObj)); //add to state variable
    addToDB(taskObj, category); //add in firebase database

    toggle();
  };

  //finally works
  const addToDB = async (newTodo, category) => {
    // Add a new document with a generated id.
    try {
      const docRef = await addDoc(collection(db, category), newTodo);
      console.log("Document written with ID: ", docRef.id);
      setId(docRef.id);
      //newTodo.databaseID = docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const todoItems = todos.map((todo) => (
  //   <TodoItem
  //     key={todo.id}
  //     title={todo.text}
  //     deleteTask={deleteTask}
  //     id={todo.id}
  //   />
  // ));

  const todoItems = todos.map((todo) =>
    category === todo.category ? (
      <TodoItem
        key={todo.id}
        title={todo.text}
        deleteTask={deleteTask}
        id={todo.id}
      />
    ) : null
  );

  return (
    <div className="todo-list">
      <div className="todo-category">
        <h4 className="category-name">{category}</h4>
        <button className="task-btn" onClick={toggle}>
          New Task
        </button>
      </div>
      {modalIsOpen ? (
        <TaskModal category={category} addToList={addTask} />
      ) : null}
      {modalIsOpen ? <Overlay onClick={toggle} /> : null}

      {todoItems}
    
    </div>
  );
};

export default TodoList;
