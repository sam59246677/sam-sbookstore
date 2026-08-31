import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 transition hover:text-blue-600"
        >
          Sam's Bookstore
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative font-medium text-gray-600 transition hover:text-blue-600"
          >
            Cart

            {cartCount > 0 && (
              <span className="absolute -right-4 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;