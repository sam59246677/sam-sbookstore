import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

interface CartItemProps {
  product: Product & {
    quantity: number;
  };
}

function CartItem({ product }: CartItemProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <article className="flex items-center gap-4 border-b py-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-24 w-20 rounded object-cover"
      />

      <div className="flex-1">
        <h2 className="font-bold text-gray-900">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500">
          {product.author}
        </p>

        <p className="mt-1 font-semibold">
          ${product.price}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(product.id)}
          className="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100"
        >
          -
        </button>

        <span className="w-6 text-center font-medium">
          {product.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(product.id)}
          className="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <p className="w-20 text-right font-bold">
        ${(product.price * product.quantity).toFixed(2)}
      </p>

      <button
        onClick={() => removeFromCart(product.id)}
        className="text-sm text-red-600 hover:text-red-800"
      >
        Remove
      </button>
    </article>
  );
}

export default CartItem;