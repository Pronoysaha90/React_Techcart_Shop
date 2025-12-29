import { brands } from '../data/brands'

export default function Brands() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900">
      <div className="container py-8 flex flex-wrap items-center gap-6">
        {brands.map(b => (
          <span key={b} className="text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 rounded-lg px-4 py-2">
            {b}
          </span>
        ))}
      </div>
    </section>
  )
}
