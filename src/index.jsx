import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Haame } from "./screens/Haame";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Haame />
  </StrictMode>,
);
