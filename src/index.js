import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";
import { Rotas } from "./routes.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Rotas />
  </>
);
