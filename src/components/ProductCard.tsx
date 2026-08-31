import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

interface ProductCardProps {
product: Product;
}

function ProductCard({ product }: ProductCardProps) {
const { addToCart } = useCart();

return ( <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">


  <Link to={`/products/${product.id}`}>
    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
      <img
        src={product.image}
        alt={product.title}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </div>
  </Link>

  <div className="p-5">
    <Link to={`/products/${product.id}`}>
      <h3 className="text-lg font-bold text-gray-900 transition hover:text-blue-600">
        {product.title}
      </h3>
    </Link>

    <p className="mt-1 text-sm text-gray-500">
      {product.author}
    </p>

    <div className="mt-5 flex items-center justify-between">
      <span className="text-xl font-bold text-blue-600">
        ${product.price.toFixed(2)}
      </span>

      <button
        type="button"
        onClick={() => addToCart(product)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  </div>
</article>


);
}

export default ProductCard;
