import { Link } from "react-router-dom";
import logoDark from "../../assets/logo-dark.png";
import HamburguerMenu from "./HamburguerMenu/HamburguerMenu";
import "./Header-style.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <Link to="/">
          <img src={logoDark} />
        </Link>
      </div>

      <HamburguerMenu />

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
