import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();
  const navigate = useNavigate();

  const isLiked = wishlist.some((p: any) => p.id === product.id);

  return (
    <div className="card">
      <img
        src={product.image}
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <h4>{product.title}</h4>

      <Rating value={4.5} />

      <p>₹{product.price}</p>

      <div className="card-actions">
        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button
            className="btn"
            onClick={() => navigate("/checkout", { state: { product } })}
            >
            Buy Now
            </button>

        <button
        className={`heart ${isLiked ? "liked" : ""}`}
        onClick={() => toggleWishlist(product)}
      >
        {isLiked ? "❤️" : "🤍"}
      </button>
      </div>
    </div>
  );
}