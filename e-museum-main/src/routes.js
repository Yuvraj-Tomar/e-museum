import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Component/About";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
