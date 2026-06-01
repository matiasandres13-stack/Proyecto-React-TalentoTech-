import logo from "../../assets/logo2.png";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

// Muestra el encabezado de la aplicación, incluyendo el logo y la barra de navegación. 
// Utiliza el componente Nav para mostrar la barra de navegación y el logo.
// Link de react-router-dom para navegar a la página principal al hacer clic en el logo.

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo-img" />
          <span>Matias Sport</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
