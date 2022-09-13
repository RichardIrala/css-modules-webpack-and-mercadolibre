import React from "react";
import ReactDom from "react-dom/client";
import { AppRoutes } from "./Router";
import { BrowserRouter } from "react-router-dom";

//Contenedor
const container = window.document.getElementById("root");

//Raiz donde se va a renderizar todo
const root = ReactDom.createRoot(container);

//Acción de renderizar componentes dentro del root
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
