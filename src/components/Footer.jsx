export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container py-10 grid md:grid-cols-4 gap-6">
        <div>
          <p className="font-bold text-neutral-900 dark:text-white">Marketroo</p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Electronics & accessories.</p>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-white">Customer Support</p>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Free Shipping</li><li>30 Days Return</li><li>Secure Payment</li><li>24/7 Support</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-white">Information</p>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>About Us</li><li>Contact</li><li>Privacy</li><li>Terms</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-white">Shop by Price</p>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Under $100</li><li>$100–$500</li><li>$500–$1000</li><li>$1000+</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
