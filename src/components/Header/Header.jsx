import { Link } from "react-router-dom";
import logoDark from "../../assets/logo-dark.png";
import "./Header-style.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <Link to="/">
          <img src={logoDark} />
        </Link>
      </div>

      <div className="navbar-hamburguer">
        <div className="hamburger-lines">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className="menu-hamburguer">
          <li>
            <Link className="link-hamburguer" to="/">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="link-hamburguer" to="/primeiros-passos">
              Primeiros Passos
            </Link>
          </li>
          <li>
            <Link className="link-hamburguer" to="/relatos">
              Relatos
            </Link>
          </li>
          <li>
            <Link className="link-hamburguer" to="contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-list">
        <ul className="menu-list">
          <li className="item-list">
            <Link className="link-list" to="/">
              Sobre
            </Link>
          </li>
          <li className="item-list">
            <Link className="link-list" to="/primeiros-passos">
              Primeiros Passos
            </Link>
          </li>
          <li className="item-list">
            <Link className="link-list" to="/relatos">
              Relatos
            </Link>
          </li>
          <li className="item-list">
            <Link className="link-list" to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
