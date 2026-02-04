import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Tugas from "./tugas5/tugas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tugas />
  </StrictMode>,
);
