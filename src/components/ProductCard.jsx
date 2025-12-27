import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <article className="group relative rounded border bg-white p-3 dark:bg-gray-800">
      {product.sale && <span className="badge-sale">20% OFF</span>}
      <div className="aspect-square overflow-hidden rounded bg-gray-100 dark:bg-gray-700">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover transition group-hover:scale-105" />
      </div>
      <h3 className="mt-3 text-sm font-semibold">{product.title}</h3>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{product.category}</p>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-blue-500 font-bold">${product.price.toFixed(2)}</span>
        <span className="text-xs text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
      </div>
      <button className="mt-3 w-full btn-primary" onClick={() => add(product)}>Add to Cart</button>
    </article>
  );
}
