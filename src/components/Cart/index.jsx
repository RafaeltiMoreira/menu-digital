import "./styles.css";
import { useContext, useEffect, useState } from "react";
import { Dock } from "react-dock";
import { ProductCart } from "../ProductCart";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context.jsx";
import { formatNumber } from "../../lib/utils.js";

export function Cart() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { cartItems, totalCart } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("openSidebar", () => {
      setShow(true);
    });

    /*setCartItems(carrinho);*/
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
        {cartItems.map(function (item) {
          return (
            <ProductCart
              key={item.id}
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              foto={item.foto}
              qtd={item.qtd}
            />
          );
        })}
      </div>

      <div className="footer-cart">
        <div className="footer-cart-value">
          <span>Total</span>
          <span className="footer-strong">{formatNumber(totalCart)}</span>
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
