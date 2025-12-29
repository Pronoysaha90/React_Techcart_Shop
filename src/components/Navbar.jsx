import { Link, NavLink } from 'react-router-dom'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="container h-16 flex items-center justify-between">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold text-neutral-900 dark:text-white">TechCart</Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-neutral-900 dark:text-white font-medium' : ''}>Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/category/smartphones">Smartphones</NavLink>
            <NavLink to="/category/accessories">Accessories</NavLink>
            <NavLink to="/category/watches">Watches</NavLink>
          </nav>
        </div>

        {/* Right: Search + Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            <input
              className="bg-transparent outline-none text-sm w-48 text-neutral-800 dark:text-neutral-200"
              placeholder="Search products…"
            />
          </div>

          {/* ✅ Theme toggle button */}
          <ThemeToggle />

          <button className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <UserIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </button>

          <Link to="/cart" className="relative p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <ShoppingCartIcon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-brand text-white rounded-full px-1.5">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
