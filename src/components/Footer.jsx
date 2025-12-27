export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container-x py-8 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TechCart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/about" className="hover:text-blue-500">About</a>
            <a href="/shop" className="hover:text-blue-500">Shop</a>
            <a href="#" className="hover:text-blue-500">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
