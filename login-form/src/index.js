import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContxtProvider } from "./context/AuthContext";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContxtProvider>
    <App />
  </AuthContxtProvider>
);
