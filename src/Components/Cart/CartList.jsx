import { useCart } from "../../context/cartcontext";
import { CartItem } from "./CartItem";

// Muestra la lista de productos en el carrito de compras, utilizando el contexto  
// del carrito para obtener los productos y renderizar un componente CartItem 
//por cada producto en el carrito

export const CartList = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="cart-items-container">
        {cart.map((element) => (
          <CartItem key={element.id} item={element} />
        ))}
      </div>
    </>
  );
};
