import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";

function App() {
  return (
    <Router>
      <div className="app">

        {/* ✅ TOP NAVBAR */}
        <div className="navbar">
          <h2>TaskTracker</h2>

          <div className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/tasks">Task List</Link>
            <Link to="/create">Create Task</Link>
          </div>
        </div>

        {/* ✅ MAIN CONTENT */}
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/create" element={<TaskForm />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;