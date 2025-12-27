const cats = [
  { name: "Phones", icon: "📱" },
  { name: "Computers", icon: "💻" },
  { name: "Accessories", icon: "🎧" },
  { name: "Laptops", icon: "🧑‍💻" },
  { name: "Monitors", icon: "🖥️" },
  { name: "Networking", icon: "📡" },
  { name: "PC Gaming", icon: "🎮" },
];

export default function Categories() {
  return (
    <section className="container-x py-10">
      <h2 className="text-2xl font-bold">Browse by Category</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {cats.map((c) => (
          <a key={c.name} href="/shop" className="flex flex-col items-center rounded border bg-white p-4 hover:border-blue-500 hover:shadow-sm dark:bg-gray-800">
            <span className="text-3xl">{c.icon}</span>
            <span className="mt-2 text-sm font-medium">{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
