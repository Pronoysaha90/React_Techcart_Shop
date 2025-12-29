export default function Hero() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900">
      <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm font-medium text-brand">Starting from $299</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Get The Sound You Love For Less
          </h1>
          <button className="mt-6 inline-flex items-center rounded-lg bg-brand px-5 py-3 text-white font-semibold shadow-soft hover:bg-brand/90">
            Shop Now
          </button>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 h-56 md:h-72 shadow-soft" />
      </div>
    </section>
  )
}
