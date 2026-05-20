import "./Footer.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";

// Componente que muestra el pie de página de la aplicación, incluyendo un mensaje de copyright y enlaces a las redes sociales.

export const Footer = () => {
  return (
    <footer>
      <p>© 2026 - Sitio desarrollado por Matías</p>

      <nav>
        <ul className="nav-list">
          <li>
            <FaInstagram className="icon" />
            Instagram
          </li>
          <li>
            <FaTwitter className="icon" />
            Twitter
          </li>
        </ul>
      </nav>
    </footer>
  );
};
``;
