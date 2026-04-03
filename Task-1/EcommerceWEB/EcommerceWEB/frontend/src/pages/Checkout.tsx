import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("UPI");

  // ✅ Buy Now OR Cart
  const buyNowProduct = location.state?.product;
  const items = buyNowProduct ? [buyNowProduct] : cart;

  const total = items.reduce(
    (sum: number, item: any) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  // 🔥 THIS IS handleOrder (NOT A FILE)
  const handleOrder = () => {
    if (!address) {
      alert("Please enter address");
      return;
    }

    const order = {
      id: Date.now(),
      items,
      total,
      address,
      payment,
      status: "Placed",
      date: new Date().toLocaleString(),
    };

    const prev = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([order, ...prev]));

    clearCart(); // 🧹 clear cart after purchase

    navigate("/success");
  };

  return (
    <div className="container checkout">
      {/* LEFT */}
      <div className="checkout-left">
        <h3>Shipping Address</h3>

        <textarea
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <h3>Payment</h3>
        <select value={payment} onChange={(e) => setPayment(e.target.value)}>
          <option>UPI</option>
          <option>Debit Card</option>
          <option>Credit Card</option>
          <option>Cash on Delivery</option>
        </select>
      </div>

      {/* RIGHT */}
      <div className="checkout-right">
        <h3>Order Summary</h3>

        {items.map((item: any) => (
          <div key={item.id}>
            {item.title} × {item.quantity || 1}
          </div>
        ))}

        <h2>Total: ₹{total}</h2>

        <button className="btn" onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}