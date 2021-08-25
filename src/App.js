import TodoCategory from "./components/TodoCategory";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   title: "girl",
    //   description: "bye",
    // },
    // {
    //   title: "girl",
    //   description: "hi",
    // },
  ]);

  return (
    <div className="app">
      <div className="dashboard-panel">
        <h1 className="logo">TodoList</h1>

        <nav className="navigation">
          <ul className="nav-list">
            <li>Dashboard</li>
            <li>To do</li>
            <li>In Progress</li>
            <li>Completed</li>
          </ul>
        </nav>
      </div>
      <div className="todo-section">
        <h1>TodoList</h1>
        <h3 className="instructions">
          Click “new task” to add a task to the specified list
        </h3>

        <div className="container">
          <div className="category">
            <TodoCategory category="To Do" />
            <TodoList category="To Do"/>
          </div>
          <div className="category">
            <TodoCategory category="In Progress" />
            <TodoList />
          </div>
          <div className="category">
            <TodoCategory category="Completed" />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
