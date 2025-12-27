import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
