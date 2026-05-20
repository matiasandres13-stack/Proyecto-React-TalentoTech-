import { Link } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Carts.css";

// Componente principal que decide que muestra. Si el carrito tiene productos, se muestra la lista de productos 
// y el resumen del carrito; Si el carrito esta vacio, se muestra un mensaje y un enlace para volver a la pagina principal.

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>Tu carrito de compras 🛒</h1>

      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p className="empty-cart">El carrito esta vacío😒</p>
          <Link className="btn primary bg-primary" to={"/"}>
            Volver
          </Link>
        </>
      )}
    </section>
  );
};
