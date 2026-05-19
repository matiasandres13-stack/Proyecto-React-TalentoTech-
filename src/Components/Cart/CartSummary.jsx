import { useCart } from "../../context/cartcontext";

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
