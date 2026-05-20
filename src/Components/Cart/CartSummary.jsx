import { useCart } from "../../context/cartcontext";

// Resumen del carrito de compras, incluyendo el total y un botón para finalizar la compra

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <div className="cart-actions">
      <p>Total: ${total}</p>

      <button className="btn bg-success primary" onClick={checkout}>
        Finalizar compra
      </button>
    </div>
  );
};
