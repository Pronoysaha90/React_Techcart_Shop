import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const { items, toggle, open } = useCart();

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container-x flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-blue-500">TechCart</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
            <NavLink to="/shop" className="hover:text-blue-500">Shop</NavLink>
            <NavLink to="/about" className="hover:text-blue-500">About</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <button className="btn-primary" onClick={toggle}>
            Cart ({items.reduce((a, b) => a + b.qty, 0)})
          </button>
        </div>
      </div>
      <CartDrawer open={open} />
    </header>
  );
}
