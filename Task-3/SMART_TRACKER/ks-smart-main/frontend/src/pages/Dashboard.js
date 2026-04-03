import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Dashboard.css";

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks/stats")
      .then(res => setStats(res.data))
      .catch(err => console.log(err));
  }, []);

  const data = [
    { name: "Completed", value: stats.completed },
    { name: "Pending", value: stats.pending }
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="dashboard-container">
      
      <h2>Dashboard</h2>

      {/* ✅ RECTANGULAR CARDS */}
      <div className="card-container">

        <div className="card">
          <h4>Total Tasks</h4>
          <p>{stats.total}</p>
        </div>

        <div className="card">
          <h4>Completed</h4>
          <p>{stats.completed}</p>
        </div>

        <div className="card">
          <h4>Pending</h4>
          <p>{stats.pending}</p>
        </div>

      </div>

      {/* ✅ CHART */}
      <h3 style={{ marginBottom: "15px" }}>Task Distribution</h3>

      <div className="chart-box">
        <PieChart width={320} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

    </div>
  );
}

export default Dashboard;