import "./styles.css";
import foto from "../../assets/hamburguer.png";

export function ProductCart() {
  return (
    <>
      <div className="produto-cart-box">
        <img src={foto} alt="Foto de um hamburguer" />
        <div>
          <p className="produto-cart-title">Spicy Burguer</p>
          <p className="produto-cart-value">R$ 15,00</p>

          <div className="footer-produto-cart">
            <div>
              <button className="footer-produto-btn">-</button>
              <span className="footer-produto-qtd">02</span>
              <button className="footer-produto-btn">+</button>
            </div>

            <p className="footer-produto-price text-right">R$ 30,00</p>
          </div>
        </div>
      </div>
    </>
  );
}
