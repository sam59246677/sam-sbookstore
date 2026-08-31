
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const order = {
      customer: {
        name,
        email,
        address,
      },
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    clearCart();

    navigate("/success");
  }

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-gray-600">
          Add some books before proceeding to checkout.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Back to Store
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Checkout
      </h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        
        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-6 shadow-sm"
        >
          <h2 className="mb-6 text-xl font-bold text-gray-900">
            Customer Information
          </h2>

          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Shipping Address
              </label>

              <textarea
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Enter your address"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 text-sm"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {item.title}
                  </p>

                  <p className="text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <span className="font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="my-6 border-t" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;

