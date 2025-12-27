import { useCart } from "../context/CartContext";

export default function CartDrawer({ open }) {
  const { items, remove, clear, total, toggle } = useCart();

  return (
    <aside
      className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-white p-4 shadow-xl transition dark:bg-gray-800 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!open}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Your Cart</h3>
        <button className="btn-outline text-sm" onClick={toggle}>Close</button>
      </div>

      {/* Cart Items */}
      <div className="mt-4 space-y-3">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">Cart is empty.</p>
        ) : (
          items.map((p) => (
            <div key={p.id} className="flex items-center gap-3 border-b pb-3">
              <img
                src={p.image}
                alt={p.title}
                className="h-12 w-12 rounded object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Qty: {p.qty} • ${p.price.toFixed(2)}
                </p>
              </div>
              <button
                className="text-red-600 text-sm"
                onClick={() => remove(p.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer with total */}
      <div className="mt-4 border-t pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Total</span>
          <span className="text-sm font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="mt-3 w-full btn-primary">Checkout</button>
        <button className="mt-2 w-full btn-outline" onClick={clear}>
          Clear Cart
        </button>
      </div>
    </aside>
  );
}
