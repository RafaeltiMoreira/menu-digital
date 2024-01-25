import "./styles.css";
import { formatNumber } from "../../lib/utils";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";

export function ProductCart(props) {
  const { AddItemCart, RemoveItemCart } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddItemCart(item);
  }

  function RemoveItem() {
    RemoveItemCart(props.id);
  }

  return (
    <>
      <div className="produto-cart-box">
        <img src={props.foto} alt="Foto de um hamburguer" />
        <div>
          <p className="produto-cart-title">{props.nome}</p>
          <p className="produto-cart-value">{formatNumber(props.preco)}</p>

          <div className="footer-produto-cart">
            <div>
              <button onClick={RemoveItem} className="footer-produto-btn">
                -
              </button>
              <span className="footer-produto-qtd">{props.qtd}</span>
              <button onClick={AddItem} className="footer-produto-btn">
                +
              </button>
            </div>

            <p className="footer-produto-price text-right">
              {formatNumber(props.preco * props.qtd)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
