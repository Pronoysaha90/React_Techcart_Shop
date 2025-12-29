import Badge from './Badge'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ p }) {
  const { dispatch } = useCart()
  return (
    <div className="group rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 shadow-soft">
      <div className="relative">
        <img src={p.image} alt={p.name} className="h-48 w-full object-cover" />
        {p.badge && <span className="absolute top-3 left-3"><Badge>{p.badge}</Badge></span>}
      </div>
      <div className="p-4">
        <Link to={`/product/${p.id}`} className="font-semibold text-neutral-900 dark:text-white hover:underline">{p.name}</Link>
        <p className="mt-1 text-brand font-bold">${p.price.toFixed(2)}</p>
        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={() => dispatch({ type: 'ADD', product: p })}
            className="rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm group-hover:bg-brand group-hover:text-white transition"
          >
            Add to Cart
          </button>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{p.stock} in stock</p>
        </div>
      </div>
    </div>
  )
}
