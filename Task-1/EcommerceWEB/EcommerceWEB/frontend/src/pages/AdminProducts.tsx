import { useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>(
    JSON.parse(localStorage.getItem("adminProducts") || "[]")
  );

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      title,
      price,
    };

    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem("adminProducts", JSON.stringify(updated));
  };

  const deleteProduct = (id: number) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("adminProducts", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Admin Products</h2>

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />

      <button onClick={addProduct}>Add</button>

      {products.map((p) => (
        <div key={p.id} className="card">
          {p.title} - ₹{p.price}
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}