const items = [
  { title: 'Free Shipping', desc: 'On orders over $99' },
  { title: 'Secure Payments', desc: '100% secure payment' },
  { title: 'Easy Returns', desc: '30 days return policy' },
  { title: '24/7 Support', desc: 'Dedicated support' },
]

export default function Promos() {
  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="container py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.title} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
            <p className="text-neutral-900 dark:text-white font-semibold">{i.title}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
