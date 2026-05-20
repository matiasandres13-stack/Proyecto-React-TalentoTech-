import { useCart } from "../../context/cartcontext";
import { Item } from "../Item/Item";

// Muestra producto en el carrito de compras, utilizando el contexto del carrito para obtener
// la función de eliminar producto del carrito

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  return (
    <Item {...item}>
      <button
        className="btn bg-delete primary"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </Item>
  );
};
