import "./styles.css";
import { Navbar } from "../../components/Navbar/index.jsx";
import { pedidos } from "../../dados.js";
import { formatNumber } from "../../lib/utils.js";

export function History() {
  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="titulo text-center">
          <h1>Histórico de pedidos</h1>
        </div>

        <div className="box-pedido">
          <table>
            {pedidos.map(function (ped) {
              return (
                <tr key={ped.id_pedido}>
                  <td className="history-strong">Pedido {ped.id_pedido}</td>
                  <td className="text-light">{ped.dt}</td>
                  <td className="text-red">{formatNumber(ped.total)}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
