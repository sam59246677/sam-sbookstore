import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-gray-600">
          You haven't added any books to your cart yet.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-600">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-medium text-red-600 transition hover:text-red-800"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="flex gap-5 rounded-xl bg-white p-5 shadow-sm"
            >
              {/* Image */}
              <Link
                to={`/products/${item.id}`}
                className="shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-24 rounded-lg object-cover"
                />
              </Link>

              {/* Information */}
              <div className="flex min-w-0 flex-1 flex-col">
                <Link
                  to={`/products/${item.id}`}
                  className="text-lg font-bold text-gray-900 transition hover:text-blue-600"
                >
                  {item.title}
                </Link>

                <p className="mt-1 text-sm text-gray-500">
                  {item.author}
                </p>

                <p className="mt-2 font-semibold text-blue-600">
                  ${item.price.toFixed(2)}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  {/* Quantity */}
                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 text-lg text-gray-700 transition hover:bg-gray-100"
                      aria-label={`Decrease ${item.title} quantity`}
                    >
                      −
                    </button>

                    <span className="min-w-10 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 text-lg text-gray-700 transition hover:bg-gray-100"
                      aria-label={`Increase ${item.title} quantity`}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm font-medium text-red-600 transition hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Item Total */}
              <div className="shrink-0 text-right">
                <p className="font-bold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/"
            className="mt-3 block text-center text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Cart;