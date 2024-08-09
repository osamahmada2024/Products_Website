import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../src/index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Products_Website">
    <App />
  </BrowserRouter>
);
