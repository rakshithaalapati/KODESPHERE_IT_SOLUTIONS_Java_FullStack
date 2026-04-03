// AddDonor.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function AddDonor({ selectedDonor, refresh }) {
  const [donor, setDonor] = useState({
    name: "",
    bloodGroup: "",
    email: "",
    status: ""
  });

  useEffect(() => {
    if (selectedDonor) {
      setDonor(selectedDonor);
    }
  }, [selectedDonor]);

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (donor.id) {
      await axios.put(`http://localhost:8080/api/donors/${donor.id}`, donor);
    } else {
      await axios.post("http://localhost:8080/api/donors", donor);
    }

    setDonor({ name: "", bloodGroup: "", email: "", status: "" });
    refresh();
  };

  return (
    <div className="card p-3 mb-3">
      <h4>{donor.id ? "Update Donor" : "Add Donor"}</h4>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" placeholder="Name" value={donor.name} onChange={handleChange} />
        <input className="form-control mb-2" name="bloodGroup" placeholder="Blood Group" value={donor.bloodGroup} onChange={handleChange} />
        <input className="form-control mb-2" name="email" placeholder="Email" value={donor.email} onChange={handleChange} />
        <input className="form-control mb-2" name="status" placeholder="Status" value={donor.status} onChange={handleChange} />

        <button className="btn btn-primary" onClick={addStock}>
          Add Stock
        </button>
      </form>
    </div>
  );
}

export default AddDonor;