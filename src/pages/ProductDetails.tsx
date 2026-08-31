
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Product Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          The book you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Store
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-h-[600px] w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Developer's Bookstore
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            {product.title}
          </h1>

          <p className="mt-4 text-lg text-gray-500">
            by {product.author}
          </p>

          <p className="mt-6 text-3xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-6 leading-7 text-gray-600">
            Expand your programming knowledge with this
            carefully selected technical book. This book is
            suitable for developers who want to improve their
            skills and build a stronger foundation in modern
            software development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
            >
              Add to Cart
            </button>

            <Link
              to="/cart"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              View Cart
            </Link>
          </div>

          <Link
            to="/"
            className="mt-6 text-sm font-medium text-gray-500 hover:text-blue-600"
          >
            ← Back to Store
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

