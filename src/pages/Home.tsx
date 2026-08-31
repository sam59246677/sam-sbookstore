import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  return (
    <main>
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Developer's Bookstore
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Books for Developers
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover books about programming, web development,
            software architecture, and modern technologies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Books
          </h2>

          <p className="mt-2 text-gray-600">
            Improve your development skills with these recommended books.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;