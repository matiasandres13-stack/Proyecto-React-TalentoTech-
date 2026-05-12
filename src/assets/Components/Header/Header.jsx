/*import logo from "../../react.svg"; */
import logo from "../../logo1.png";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo-img" />

          <span>React Matias</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
