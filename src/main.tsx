import "./index.css";

import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/browserRouter.tsx";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
