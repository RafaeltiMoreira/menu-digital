import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { Checkout } from "./pages/Checkout/index.jsx";
import { History } from "./pages/History/index.jsx";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
