import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>TaskTracker</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/tasks">Task List</Link>
      <Link to="/create">Create Task</Link>
    </div>
  );
}

export default Sidebar;