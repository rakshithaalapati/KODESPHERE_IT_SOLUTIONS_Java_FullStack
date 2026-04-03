import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {

  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>

        {/* HEADER */}
        <div className="sidebar-header">
          <h2 className="logo">{isOpen ? "🩸 Blood Bank" : "🩸"}</h2>

          <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        {/* MENU */}
        <div className="menu">

          <Link
            to="/home/dashboard"
            className={`menu-item ${location.pathname.includes("dashboard") ? "active" : ""}`}
          >
            <span>📊</span>
            {isOpen && <span>Dashboard</span>}
          </Link>

          <Link
            to="/home/donors"
            className={`menu-item ${location.pathname.includes("donors") ? "active" : ""}`}
          >
            <span>👤</span>
            {isOpen && <span>Donor Management</span>}
          </Link>

          <Link
            to="/home/inventory"
            className={`menu-item ${location.pathname.includes("inventory") ? "active" : ""}`}
          >
            <span>🧪</span>
            {isOpen && <span>Inventory</span>}
          </Link>

          <Link
            to="/home/requests"
            className={`menu-item ${location.pathname.includes("requests") ? "active" : ""}`}
          >
            <span>📦</span>
            {isOpen && <span>Requests</span>}
          </Link>

        </div>

      </div>

      {/* CONTENT */}
      <div className="content">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;