export default function Newsletter() {
  return (
    <section className="bg-white dark:bg-neutral-900">
      <div className="container py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Join Our Newsletter, Get 15% Off</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Subscribe</p>
        </div>
        <form className="flex gap-3">
          <input className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent px-4 py-3 text-neutral-900 dark:text-neutral-200" placeholder="Enter your email" />
          <button className="rounded-lg bg-brand px-5 py-3 text-white font-semibold">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
