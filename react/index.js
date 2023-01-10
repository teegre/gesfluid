import React from "react";
import { createRoot } from "react-dom/client";
// import "./css/index.css";

import App from "./jsx/App";

console.log("main!")
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div className="container mt-2">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
