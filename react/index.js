import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./jsx/app";

console.log("main!")
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
