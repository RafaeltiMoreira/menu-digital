import "./styles.css";
import bag from "../../assets/bag-black.png";
import { formatNumber } from "../../lib/utils";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";

export function ShowProduct(props) {
  const { AddItemCart } = useContext(CartContext);

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

  return (
    <div className="produto-box text-center">
      <img src={props.foto} alt="Foto" />

      <div>
        <h2>{props.nome}</h2>
        <p className="prod-vitrine-descricao">{props.descricao}</p>
        <p className="prod-vitrine-preco">{formatNumber(props.preco)}</p>
      </div>

      <div>
        <button className="btn btn-cart" onClick={AddItem}>
          <img src={bag} className="icon" alt="Ícone de mochila de compras" />
          Adicionar
        </button>
      </div>
    </div>
  );
}
