import { useCart } from '../context/CartContext'

export default function Cart() {
  const { state, dispatch, subtotal } = useCart()
  const items = Object.values(state.items)

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-10">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Your Cart</h1>
        {items.length === 0 ? (
          <p className="text-neutral-700 dark:text-neutral-300">Cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded" />
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">{product.name}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">${product.price.toFixed(2)} × {qty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => dispatch({ type: 'SET_QTY', id: product.id, qty: Math.max(1, qty - 1) })} className="px-2 py-1 rounded border">-</button>
                  <span>{qty}</span>
                  <button onClick={() => dispatch({ type: 'SET_QTY', id: product.id, qty: qty + 1 })} className="px-2 py-1 rounded border">+</button>
                  <button onClick={() => dispatch({ type: 'REMOVE', id: product.id })} className="px-3 py-1 rounded bg-red-600 text-white">Remove</button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-neutral-900 dark:text-white font-semibold">Subtotal</p>
              <p className="text-brand font-bold">${subtotal.toFixed(2)}</p>
            </div>
            <button className="mt-4 rounded-lg bg-brand px-5 py-3 text-white font-semibold">Checkout</button>
          </div>
        )}
      </div>
    </section>
  )
}
