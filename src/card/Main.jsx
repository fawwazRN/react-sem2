import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>{/* <Card {...data} /> */}</StrictMode>,
);
