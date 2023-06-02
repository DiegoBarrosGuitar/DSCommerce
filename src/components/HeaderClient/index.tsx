import React from "react";
import "./styles.css";
import cartIcon from "../../assets/Cart.svg";
import { Link } from "react-router-dom";

//Para organizar melhor, criar a funcao, exatamente com o mesmo nome da subpasta criada. No caso, "HeaderClient".
export default function HeaderClient() {
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={"/"}>
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <Link to={"/cart"}>
              <img src={cartIcon} alt="Carrinho de compras" />
              </Link>
            </div>
          </div>
          <Link to={"/login"}>
            Entrar
          </Link>
        </div>
      </nav>
    </header>
  );
}
