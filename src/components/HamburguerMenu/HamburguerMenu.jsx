import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./HamburguerMenu-style.css";

import * as cn from "classnames";

const HamburguerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((active) => !active);
  };

  const MenuLink = ({ children, ...props }) => (
    <Link className="link-list" {...props} onClick={() => setActive(false)}>
      {children}
    </Link>
  );

  return (
    <div className="hamburguer-container">
      <div className="hamburguer-icon" onClick={toggleActive}>
        <FiMenu size={24} color="#fff" />
      </div>

      <nav className={cn("mobile-nav", { active })}>
        <ul className="menu-list">
          <li className="item-list">
            <MenuLink className="link-list" to="/">
              Sobre
            </MenuLink>
          </li>
          <li className="item-list">
            <MenuLink className="link-list" to="/primeiros-passos">
              Primeiros Passos
            </MenuLink>
          </li>
          <li className="item-list">
            <MenuLink className="link-list" to="/relatos">
              Relatos
            </MenuLink>
          </li>
          <li className="item-list">
            <MenuLink className="link-list" to="/contato">
              Contato
            </MenuLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburguerMenu;
