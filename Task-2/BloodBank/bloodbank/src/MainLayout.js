import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DonorManagement from "./DonorManagement";
import Inventory from "./Inventory";
import Requests from "./Requests";

function MainLayout() {
  return (
    <div style={{ display: "flex" }}>

  {/* Sidebar */}
  <div className="navbar" style={{ flexDirection: "column", width: "220px", height: "100vh" }}>
    <h2>🩸 Blood Bank</h2>

    <div className="nav-links" style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/home/dashboard">Dashboard</Link>
      <Link to="/home/donors">Donors</Link>
      <Link to="/home/inventory">Inventory</Link>
      <Link to="/home/requests">Requests</Link>
    </div>
  </div>

  {/* Content */}
  <div style={{ flex: 1, padding: "30px" }}>
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="donors" element={<DonorManagement />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="requests" element={<Requests />} />
    </Routes>
  </div>

</div>
  );
}

export default MainLayout;