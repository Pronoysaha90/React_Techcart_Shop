export default function Hero() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900">
      <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-brand">
            Starting from $299
          </p>

          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Get The Sound from your Heart
          </h1>

          <button className="mt-6 inline-flex items-center rounded-lg bg-brand px-5 py-3 text-white font-semibold shadow-soft hover:bg-brand/90">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="rounded-xl bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-900 h-56 md:h-72 shadow-soft flex items-center justify-center overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/21/11/35/camera-4565859_1280.jpg"
            alt="Product"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
