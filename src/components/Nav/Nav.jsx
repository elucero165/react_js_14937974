import { Link } from "react-router-dom";
import { useCartContext } from "../../context/Cartcontext/userCartContext";
import "./Nav.css";

export const Nav = () => {
  const {getTotalItems}= useCartContext();
  return (
    <nav className="navbar">
      <h1 className="logo">Fusión Snack Bar</h1>
      <ul className="nav-links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/dulce"}>Dulce</Link>
        </li>
        <li>
          <Link to={"/category/salado"}>Salado</Link>
        </li>
        <li className="nav-links">
          <Link to="/cart">🛒</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}

        </li>
      </ul>
    </nav>
  );
};