import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container">
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>E-Commerce Platform</h1>

      {/* 🔥 Featured Section */}
      <div className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="grid">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* 🔥 All Products Section */}
      <div className="section">
        <h2 className="section-title">All Products</h2>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}