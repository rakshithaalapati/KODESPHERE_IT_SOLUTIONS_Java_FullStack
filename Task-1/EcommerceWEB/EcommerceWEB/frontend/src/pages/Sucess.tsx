import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="container success">
      <div className="success-box">
        <h1>✅ Order Placed Successfully!</h1>
        <p>Your order is on the way 🚚</p>

        <button onClick={() => navigate("/orders")}>
          Track Order
        </button>
      </div>
    </div>
  );
}