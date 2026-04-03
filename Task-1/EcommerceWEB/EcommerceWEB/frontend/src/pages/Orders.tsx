import { useState } from "react";

const statusSteps = [
  "Placed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

export default function Orders() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders") || "[]")
  );

  const updateStatus = (id: number) => {
    const updated = orders.map((o: any) => {
      const currentIndex = statusSteps.indexOf(o.status);
      const nextStatus = statusSteps[currentIndex + 1] || o.status;

      return o.id === id ? { ...o, status: nextStatus } : o;
    });

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>📦 Your Orders</h2>

      {orders.map((o: any) => (
        <div className="card" key={o.id}>
          <h4>Order #{o.id}</h4>
          <p>Date: {o.date}</p>

          {/* 🔥 TIMELINE */}
          <div className="timeline">
            {statusSteps.map((step, i) => {
              const activeIndex = statusSteps.indexOf(o.status);

              return (
                <div
                  key={step}
                  className={`step ${
                    i <= activeIndex ? "active" : ""
                  }`}
                >
                  {step}
                </div>
              );
            })}
          </div>

          <hr />

          {/* ITEMS */}
          {o.items.map((item: any) => (
            <div key={item.id}>
              {item.title} - ₹{item.price}
            </div>
          ))}

          <h3>Total: ₹{o.total}</h3>

          {/* 🔥 simulate progress */}
          {o.status !== "Delivered" && (
            <button onClick={() => updateStatus(o.id)}>
              Update Status
            </button>
          )}
        </div>
      ))}
    </div>
  );
}