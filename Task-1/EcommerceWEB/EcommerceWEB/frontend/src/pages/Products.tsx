import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [category, setCategory] = useState("all");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    const q = searchParams.get("q") || "";

    let result = products.filter((p) =>
      p.title.toLowerCase().includes(q.toLowerCase())
    );

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    setFiltered(result);
  }, [products, category, searchParams]);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="products-layout">
      <Filters categories={categories} setCategory={setCategory} />

      <div className="products-content">
        <h2>Listing Grid</h2>

        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}