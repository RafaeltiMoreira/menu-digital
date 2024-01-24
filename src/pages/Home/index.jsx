import { Navbar } from "../../components/Navbar/index.jsx";
import { ShowProduct } from "../../components/ShowProduct/index.jsx";

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
        <ShowProduct />
        <ShowProduct />
        <ShowProduct />
        <ShowProduct />
      </div>
    </>
  );
}
