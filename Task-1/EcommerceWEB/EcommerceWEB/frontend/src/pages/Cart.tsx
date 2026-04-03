import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2>Cart</h2>

      {cart.map((item: any) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} />

          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
          </div>

          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button className="btn" onClick={() => navigate("/checkout")}>
        Proceed to Checkout
        </button>
    </div>
  );
}