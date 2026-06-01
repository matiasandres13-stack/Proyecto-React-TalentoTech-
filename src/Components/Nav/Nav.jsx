import { useCart } from "../../context/cartcontext";
import "./Nav.css";
import { Link } from "react-router-dom";

// Muestra la barra de navegación de la aplicación, utilizando el contexto del carrito
// para obtener el total de productos en el carrito y mostrarlo en el enlace
// del carrito. Link de react-router-dom para navegar entre las diferentes rutas de la aplicación.

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carrito">
            Carrito 🛒{" "}
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
