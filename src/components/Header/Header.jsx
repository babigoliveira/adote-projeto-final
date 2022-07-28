import { Link } from "react-router-dom";
import logoDark from "../../assets/logo-dark.png";
import "./Header-style.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <img src={logoDark} />
      </div>
      <div className="navbar">
        <ul className="menu-navbar">
          <li className="item">
            <Link className="link" to="/">
              Sobre
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/primeiros-passos">
              Primeiros Passos
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/relatos">
              Relatos
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
