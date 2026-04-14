import { NavLink } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Inicio
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Productos
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Carrito
      </NavLink>
    </nav>
  );
}

export default Navbar;
