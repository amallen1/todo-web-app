import React from "react";

const DashboardPanel = () => {
  return (
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
  );
};

export default DashboardPanel;
