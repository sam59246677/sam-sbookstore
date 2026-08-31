import { Link } from "react-router-dom";

function Success() {
  const orderData = localStorage.getItem("lastOrder");

  if (!orderData) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          No Order Found
        </h1>

        <p className="mt-3 text-gray-600">
          We couldn't find your recent order.
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

  const order = JSON.parse(orderData);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Order Successful!
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you, {order.customer.name}. Your order has been placed
          successfully.
        </p>

        <div className="mt-8 rounded-xl bg-gray-50 p-6 text-left">
          <h2 className="text-xl font-bold text-gray-900">
            Order Summary
          </h2>

          <div className="mt-5 space-y-4">
            {order.items.map(
              (item: {
                id: number;
                title: string;
                price: number;
                quantity: number;
              }) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <span className="font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="my-6 border-t" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default Success;