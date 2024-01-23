import "./styles.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

export function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logotipo" alt="Logotipo" />

      <div className="menu">
        <a href="/history">Histórico</a>
        <button className="btn btn-red">
          <img src={bag} className="icon" alt="Ícone de mochila de compras" />
          Sacola
        </button>
      </div>
    </div>
  );
}
