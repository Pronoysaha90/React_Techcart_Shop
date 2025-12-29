import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function ProductSection({ title, filterTag }) {
  const list = products.filter(p => p.tags.includes(filterTag))
  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">{title}</h2>
          <a href="#" className="text-sm text-brand hover:underline">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
