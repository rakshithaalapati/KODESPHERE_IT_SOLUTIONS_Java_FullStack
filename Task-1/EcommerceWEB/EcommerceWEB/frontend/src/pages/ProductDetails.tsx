import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/productService";
import { useCart } from "../context/CartContext";
import Rating from "../components/Rating";
import type { Product } from "../types/Product";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (id) getProduct(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container details-page">
      <div className="details-left">
        <img src={product.image} />
      </div>

      <div className="details-right">
        <h2>{product.title}</h2>

        <Rating value={4.7} />

        <h3>₹{product.price}</h3>

        <p>{product.description}</p>

        <div>
          Qty:
          <button onClick={() => setQty(qty - 1)}>-</button>
          {qty}
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}