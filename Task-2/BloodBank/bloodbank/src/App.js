import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Requests from "./Requests";
import DonorManagement from "./DonorManagement";

function App() {
  return (
    <Router>
      <Routes>

        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/home/dashboard" />} />

        {/* Layout */}
        <Route path="/home" element={<Layout />}>

          {/* Correct routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="donors" element={<DonorManagement />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="requests" element={<Requests />} />

          {/* 🔥 FIX: handle old wrong URL */}
          <Route path="donor" element={<Navigate to="/home/donors" />} />

          {/* Default */}
          <Route index element={<Dashboard />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;