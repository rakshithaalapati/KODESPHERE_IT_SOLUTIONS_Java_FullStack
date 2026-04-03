import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Smart Task Tracker</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
}

export default Navbar;