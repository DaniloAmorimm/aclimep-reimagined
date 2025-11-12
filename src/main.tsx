import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ IMPORTANTE: importe o BrowserRouter
import { HashRouter } from "react-router-dom";

// createRoot(document.getElementById("root")!).render(<App />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* ✅ Defina o basename para GitHub Pages */}
    <HashRouter /*basename="/aclimep-reimagined/"*/>
      <App />
    </HashRouter>
  </React.StrictMode>
);
