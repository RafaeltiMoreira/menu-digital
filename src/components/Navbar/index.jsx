import "./styles.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import { Cart } from "../Cart/index.jsx";
import { Link } from "react-router-dom";

export function Navbar(props) {
  function openSidebar() {
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logotipo" alt="Logotipo" />
      </Link>

      {props.showMenu ? (
        <div className="menu">
          <Link to="/history">Histórico</Link>
          <button onClick={openSidebar} className="btn btn-red">
            <img src={bag} className="icon" alt="Ícone de mochila de compras" />
            Sacola
          </button>
        </div>
      ) : null}

      <Cart />
    </div>
  );
}
