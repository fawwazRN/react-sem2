import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Task from "./Task";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task />
  </StrictMode>,
);
