import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
  };

  return (
    <>
      {/* TOP NAV */}
      <nav className="navbar">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* 🔥 NEW NAME */}
        <h2 className="logo" onClick={() => navigate("/")}>
          DealDock
        </h2>

        <form onSubmit={handleSearch}>
          <input
            placeholder="Search anything..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div className="nav-actions">
          <Link to="/cart">🛒 {cart.length}</Link>
        </div>
      </nav>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "show" : ""}`}>
        <Link to="/">🏠 Home</Link>
        <Link to="/products">📦 Products</Link>
        <Link to="/wishlist">❤️ Wishlist</Link>
        <Link to="/orders">📜 Orders</Link>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}