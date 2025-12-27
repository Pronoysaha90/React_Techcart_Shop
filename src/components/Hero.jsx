export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="container-x grid gap-8 py-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold text-blue-500">New Arrival</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Roco Wireless Headphone</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Starting from <span className="font-semibold">$48.00</span>. Rated 5 stars by 100+ users.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="/shop" className="btn-primary">Shop Now</a>
            <div className="flex items-center gap-1 text-yellow-500" aria-label="5 star rating">
              {"★★★★★".split("").map((s, i) => <span key={i}>★</span>)}
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/src/assets/placeholder.jpg" alt="Wireless Headphone" className="w-full rounded-lg shadow-sm" />
        </div>
      </div>
    </section>
  );
}
