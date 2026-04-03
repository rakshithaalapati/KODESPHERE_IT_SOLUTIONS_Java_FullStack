import React, { useState } from "react";

function Inventory() {

  const [data, setData] = useState([
    { group: "A+", units: 20, status: "Available" },
    { group: "B+", units: 10, status: "Low" },
    { group: "O+", units: 5, status: "Critical" },
    { group: "AB+", units: 15, status: "Available" }
  ]);

  const [newGroup, setNewGroup] = useState("");
  const [newUnits, setNewUnits] = useState("");

  // ✅ ADD STOCK FUNCTION
  const addStock = () => {
    if (!newGroup || !newUnits) {
      alert("Enter details");
      return;
    }

    const units = parseInt(newUnits);

    let status = "Available";
    if (units < 10) status = "Critical";
    else if (units < 15) status = "Low";

    setData([
      ...data,
      { group: newGroup, units, status }
    ]);

    setNewGroup("");
    setNewUnits("");
  };

  // ✅ BADGE FUNCTION
  const getBadge = (status) => {
    if (status === "Available") return "badge-success";
    if (status === "Low") return "badge-warning";
    return "badge-danger";
  };

  return (
    <div className="page">

      <h2>Inventory</h2>

      {/* 🔥 FORM CARD */}
      <div className="card form-section">
        <h3>Add Blood Stock</h3>

        <div className="grid">
          <input
            placeholder="Blood Group (A+, B+...)"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
          />

          <input
            type="number"
            placeholder="Units"
            value={newUnits}
            onChange={(e) => setNewUnits(e.target.value)}
          />

          <button className="btn btn-primary" onClick={addStock}>
            Add Stock
          </button>
        </div>
      </div>

      {/* 🔥 TABLE */}
      <table className="table">
        <thead>
          <tr>
            <th>Group</th>
            <th>Units</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.group}</strong></td>
              <td>{item.units}</td>
              <td>
                <span className={`badge ${getBadge(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Inventory;