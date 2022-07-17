import { Link } from "react-router-dom";
import "./Header-style.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <p>Adote</p>
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
            <Link className="link" to="/educacao-consciente">
              Educação Consciente
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
