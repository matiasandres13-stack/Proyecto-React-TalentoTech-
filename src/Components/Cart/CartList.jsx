import { useCart } from "../../context/cartcontext";
import { CartItem } from "./CartItem";

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
