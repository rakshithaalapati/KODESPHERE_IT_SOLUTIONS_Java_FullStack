function DonorManagement() {
  return (
    <div>
      <h3>Donor Management</h3>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Status</th>
            <th>Last Donation</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Doe</td>
            <td>A+</td>
            <td><span className="badge bg-success">Active</span></td>
            <td>11/23/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DonorManagement;