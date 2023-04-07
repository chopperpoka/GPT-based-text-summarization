import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Demo from "./pages/demo/Demo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "demo",
    element: <Demo />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
