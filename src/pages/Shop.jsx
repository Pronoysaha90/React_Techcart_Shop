import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Phones", "Computers", "Accessories", "Laptops", "Monitors", "Networking", "PC Gaming"];

export default function Shop() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <section className="container-x py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shop</h1>
        <select className="border rounded px-3 py-2 text-sm dark:bg-gray-800" value={cat} onChange={(e) => setCat(e.target.value)}>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
