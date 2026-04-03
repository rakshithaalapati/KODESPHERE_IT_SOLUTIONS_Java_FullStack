import React from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

function Dashboard() {

  const data = [
    { group: "A+", units: 40 },
    { group: "B+", units: 25 },
    { group: "O+", units: 30 },
    { group: "AB+", units: 15 }
  ];

  const COLORS = ["#e63946", "#1d3557", "#ff6b6b", "#457b9d"];

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Cards */}
      <div className="grid" style={{ marginTop: "20px" }}>
        {data.map((item, i) => (
          <div className="card" key={i}>
            <h3>{item.group}</h3>
            <p>{item.units} Units Available</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid" style={{ marginTop: "40px" }}>

        <div className="card">
          <h4>Blood Distribution</h4>
          <PieChart width={300} height={250}>
            <Pie
              data={data}
              dataKey="units"
              nameKey="group"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="card">
          <h4>Stock Levels</h4>
          <BarChart width={300} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="group" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="units" fill="#e63946" />
          </BarChart>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;