import "./styles.css";
import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import { ProductCart } from "../ProductCart";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("openSidebar", () => {
      setShow(true);
    });
  }, []);

  function checkout() {
    navigate("/checkout");
  }

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <div className="text-center">
        <h1>Meu pedido</h1>
      </div>

      <div className="lista-produtos">
        <ProductCart />
        <ProductCart />
      </div>

      <div className="footer-cart">
        <div className="footer-cart-value">
          <span>Total</span>
          <span className="footer-strong">R$ 250,00</span>
        </div>
        <div>
          <button onClick={checkout} className="btn-checkout">
            Finalizar pedido
          </button>
        </div>
      </div>
    </Dock>
  );
}
