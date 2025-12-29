export default function QuantityStepper({ qty, onChange }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button onClick={() => onChange(Math.max(1, qty - 1))} className="px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700">-</button>
      <span className="min-w-6 text-center text-sm text-neutral-800 dark:text-neutral-200">{qty}</span>
      <button onClick={() => onChange(qty + 1)} className="px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700">+</button>
    </div>
  )
}
