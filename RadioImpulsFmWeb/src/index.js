import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("root not found");
const container = ReactDOM.createRoot(root);
container.render(<App />);
