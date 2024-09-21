import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import "@pigment-css/react/styles.css";
import { css } from "@pigment-css/react";
import { globalReset } from "./styles/reset.jsx";
globalReset;

const rootStyles = css({
  backgroundColor: "#1a1a1a",
  backgroundImage: "radial-gradient(circle, #2a4a6a, #1a1a1a)",
  width: "100%",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const rootElement = document.getElementById("root");
rootElement.className = rootStyles;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
