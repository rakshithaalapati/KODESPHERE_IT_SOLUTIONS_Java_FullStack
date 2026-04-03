// DonorList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function DonorList({ setSelectedDonor }) {
  const [donors, setDonors] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/api/donors");
    setDonors(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteDonor = async (id) => {
    await axios.delete(`http://localhost:8080/api/donors/${id}`);
    fetchData();
  };

  return (
    <div className="card">
  <h3>Donor List</h3>

  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Blood</th>
        <th>Email</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {donors.map((d) => (
        <tr key={d.id}>
          <td>{d.name}</td>
          <td>{d.bloodGroup}</td>
          <td>{d.email}</td>
          <td>{d.status}</td>
          <td>
            <button className="btn btn-outline" onClick={() => setSelectedDonor(d)}>
              Edit
            </button>

            <button className="btn btn-primary" onClick={() => deleteDonor(d.id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default DonorList;