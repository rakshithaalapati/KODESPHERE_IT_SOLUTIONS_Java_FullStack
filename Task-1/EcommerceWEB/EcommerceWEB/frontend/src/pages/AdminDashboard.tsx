import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function AdminDashboard() {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  const data = orders.map((o: any) => ({
    name: `#${o.id}`,
    total: o.total,
  }));

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" />
      </BarChart>
    </div>
  );
}