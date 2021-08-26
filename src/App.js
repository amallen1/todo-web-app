import DashboardPanel from "./components/DashboardPanel";
import TodoSection from "./components/TodoSection";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [toDoEditing, setToDoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleSubmit = (e) => {
    //common practice to prevent refreshing after submitting of the form
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));

    //reset input
    setTodo("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);

    //actually updates without mutating them
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      //if this is the todo we're updating
      if (todo.id === id) {
        //modify the completed value of the todo we are trying to modify
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });

    setTodos(updatedTodos);

    //reset editing text and todo editing
    setToDoEditing(null);
    setEditingText("");
  };
  return (
    <div className="app">
      <DashboardPanel />
      <TodoSection />

      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add todo</button>
      </form> */}

      {/* {todos.map((todo) => (
        <div key={todo.id}>
          {toDoEditing === todo.id ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
              value={editingText}
            />
          ) : (
            <div>{todo.text}</div>
          )}

          <button onClick={() => deleteTodo(todo.id)}>Delete</button>

          <input
            type="checkbox"
            onChange={() => toggleComplete(todo.id)}
            checked={todo.completed}
          />

          {toDoEditing === todo.id ? (
            <button onClick={() => editTodo(todo.id)}>Submit Edit</button>
          ) : (
            <button onClick={() => setToDoEditing(todo.id)}>Edit Todo</button>
          )}
        </div>
      ))} */}
    </div>
  );
}

export default App;
