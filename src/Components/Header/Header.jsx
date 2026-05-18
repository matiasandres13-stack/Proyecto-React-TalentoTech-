import logo from "../../assets/logo2.png";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

import "./Header.css";

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
