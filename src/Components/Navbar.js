import React from "react";
import { NavLink } from "react-router-dom";
import logburger from "../Assets/logburger.png";
import "../Css/Navbar.css";
import Ticket from "./ticket";

const Navbar = props => (
  <div className="nav">
    <div className="nav-menu">
      <ul className="menu-list">
        <img className="log-burger" src={logburger} alt="logburger" />
        {/* <li><NavLink className="nav-menu__link" exact to="/">Inicio</NavLink></li> */}
        <li>
          <NavLink className="nav-menu__link" to="/Breakfast">
            Desayuno
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" exact to="/Burgers">
            Hamburgesas
          </NavLink>
        </li>
        {/* <li><NavLink className="nav-menu__link" to="/Burgers">Hmburgesas</NavLink></li>   */}
        <li>
          <NavLink className="nav-menu__link" to="/Drinks">
            Bebidas
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/Complements">
            Complementos
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="nav-list">
      <ul className="nav-menu-list">
        <li className="column-ticketone">Cant.</li>
        <li className="column-tickettwo">Producto</li>
        <li className="column-ticketthree">Precio</li>
        <li>Borrar</li>
      </ul>
      <Ticket />
    </div>
  </div>
);

export default Navbar;
