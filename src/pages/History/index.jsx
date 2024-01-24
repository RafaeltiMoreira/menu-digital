import "./styles.css";
import { Navbar } from "../../components/Navbar/index.jsx";

export function History() {
  const pedidos = [
    { id_pedido: 541561, dt: "14/01/2024", total: 150.3 },
    { id_pedido: 841562, dt: "15/01/2024", total: 99 },
    { id_pedido: 887453, dt: "18/01/2024", total: 119.9 },
    { id_pedido: 985417, dt: "19/01/2024", total: 37.2 },
    { id_pedido: 995411, dt: "19/01/2024", total: 49.9 },
    { id_pedido: 985852, dt: "19/01/2024", total: 78.8 },
    { id_pedido: 998524, dt: "19/01/2024", total: 50.0 },
  ];

  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Histórico de pedidos</h1>
        </div>

        <div className="box-pedido">
          <table>
            <tr>
              <td className="history-strong">Pedido 321321</td>
              <td className="text-light">14/01/2024</td>
              <td className="text-red">R$ 500,00</td>
            </tr>
            <tr>
              <td className="history-strong">Pedido 321321</td>
              <td className="text-light">14/01/2024</td>
              <td className="text-red">R$ 500,00</td>
            </tr>
            <tr>
              <td className="history-strong">Pedido 321321</td>
              <td className="text-light">14/01/2024</td>
              <td className="text-red">R$ 500,00</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
