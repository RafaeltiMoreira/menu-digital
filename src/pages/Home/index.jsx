import { Navbar } from "../../components/Navbar/index.jsx";
import { ShowProduct } from "../../components/ShowProduct/index.jsx";
import { produtos } from "../../dados.js";

export function Home() {
  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Nosso Cardápio</h1>
          <p className="subtitulo">
            Clique em adicionar para colocar os produtos na sacola de compras.
            Se preferir, você pode pedir pelo WhatsApp: (61) 95555-2222
          </p>
        </div>
      </div>

      <div className="text-center">
        {produtos.map(function (prod) {
          return (
            <ShowProduct
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              foto={prod.foto}
            />
          );
        })}
      </div>
    </>
  );
}
