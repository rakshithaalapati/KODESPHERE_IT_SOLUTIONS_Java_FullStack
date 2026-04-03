import React, { useState } from "react";

function Requests() {

  const [requests, setRequests] = useState([
    { name: "Hospital A", blood: "A+", units: 5, status: "Pending", date: "12/03/2024" },
    { name: "Clinic B", blood: "B+", units: 2, status: "Approved", date: "10/03/2024" },
    { name: "Hospital C", blood: "O+", units: 8, status: "Pending", date: "15/03/2024" }
  ]);

  const [name, setName] = useState("");
  const [blood, setBlood] = useState("");
  const [units, setUnits] = useState("");

  // Add new request
  const addRequest = () => {
    if (!name || !blood || !units) {
      alert("Enter all details");
      return;
    }

    setRequests([
      ...requests,
      {
        name,
        blood,
        units,
        status: "Pending",
        date: new Date().toLocaleDateString()
      }
    ]);

    setName("");
    setBlood("");
    setUnits("");
  };

  // Approve
  const approve = (index) => {
    const updated = [...requests];
    updated[index].status = "Approved";
    setRequests(updated);
  };

  // Reject
  const reject = (index) => {
    const updated = [...requests];
    updated[index].status = "Rejected";
    setRequests(updated);
  };

  const getBadge = (status) => {
    if (status === "Approved") return "bg-success";
    if (status === "Rejected") return "bg-danger";
    return "bg-warning";
  };

  return (
    <div>
      <h3>Blood Requests</h3>

      {/* Add Request */}
      <div className="card p-3 mt-3">
        <h5>New Request</h5>

        <div className="row">
          <div className="col-md-3">
            <input className="form-control" placeholder="Hospital Name"
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="col-md-3">
            <input className="form-control" placeholder="Blood Group"
              value={blood} onChange={(e) => setBlood(e.target.value)} />
          </div>

          <div className="col-md-3">
            <input className="form-control" type="number" placeholder="Units"
              value={units} onChange={(e) => setUnits(e.target.value)} />
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary w-100" onClick={addRequest}>
              Add Request
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered mt-4 text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Blood</th>
            <th>Units</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td>{req.name}</td>
              <td>{req.blood}</td>
              <td>{req.units}</td>

              <td>
                <span className={`badge ${getBadge(req.status)}`}>
                  {req.status}
                </span>
              </td>

              <td>{req.date}</td>

              <td>
                {req.status === "Pending" && (
                  <>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => approve(index)}
                    >
                      Approve
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => reject(index)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Requests;