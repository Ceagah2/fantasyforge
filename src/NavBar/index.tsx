import React from "react";
import "./styles.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#terms-of-use" className="nav-item">
            Termos de Uso
          </a>
        </li>
        <li>
          <a href="#privacy-policy" className="nav-item">
            Política de Privacidade
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
