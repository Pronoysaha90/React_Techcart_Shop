import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import QuantityStepper from '../components/QuantityStepper'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const p = products.find(x => x.id === id)
  const [qty, setQty] = useState(1)
  const { dispatch } = useCart()

  if (!p) return <div className="container py-10 text-neutral-900 dark:text-white">Product not found.</div>

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-10 grid md:grid-cols-2 gap-8">
        <img src={p.image} alt={p.name} className="w-full h-80 object-cover rounded-xl shadow-soft" />
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">{p.name}</h1>
          <p className="mt-2 text-brand font-bold text-xl">${p.price.toFixed(2)}</p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Rating: {p.rating} ★</p>
          <div className="mt-4 flex items-center gap-4">
            <QuantityStepper qty={qty} onChange={setQty} />
            <button
              onClick={() => dispatch({ type: 'ADD', product: p, qty })}
              className="rounded-lg bg-brand px-5 py-3 text-white font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
