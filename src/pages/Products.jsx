import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { categories } from '../data/categories'

export default function Products() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? products : products.filter(p => p.tags.includes(active))

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-10">
        <div className="flex flex-wrap gap-3 mb-6">
          <button onClick={() => setActive('all')} className={`px-3 py-1 rounded border ${active==='all'?'bg-brand text-white border-brand':'border-neutral-300 dark:border-neutral-700'}`}>All</button>
          {categories.map(c => (
            <button key={c.slug} onClick={() => setActive(c.slug)} className={`px-3 py-1 rounded border ${active===c.slug?'bg-brand text-white border-brand':'border-neutral-300 dark:border-neutral-700'}`}>{c.name}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
