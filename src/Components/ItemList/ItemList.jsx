import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

// El organizador: Este componente recibe la lista. No le importa cómo se ve cada producto, solo se encarga 
// de recorrer el array (.map()) y decirle al siguiente nivel que renderice cada uno. "Item"

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};
