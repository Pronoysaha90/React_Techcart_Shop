import ProductCard from './ProductCard'
import { products } from '../data/products'

export default function ProductGrid({ title = 'Featured Products', tag = 'featured' }) {
  const list = products.filter(p => p.tags.includes(tag))
  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-10">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
