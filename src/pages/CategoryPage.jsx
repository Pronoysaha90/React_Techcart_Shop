import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function CategoryPage() {
  const { slug } = useParams()
  const list = products.filter(p => p.tags.includes(slug))

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-10">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">{slug.toUpperCase()}</h1>
        {list.length === 0 ? (
          <p className="text-neutral-700 dark:text-neutral-300">No products found in this category.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {list.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
