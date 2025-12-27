import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <section className="container-x py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Explore our Products</h2>
        <a href="/shop" className="text-blue-500 hover:underline">View All Products</a>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
