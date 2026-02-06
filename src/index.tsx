import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FigmaDesignFfJpeg } from "./screens/FigmaDesignFfJpeg";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FigmaDesignFfJpeg />
  </StrictMode>,
);
