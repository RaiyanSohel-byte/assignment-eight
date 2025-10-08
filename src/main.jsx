import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Apps from "./Components/Apps/Apps.jsx";
import Installation from "./Components/Installation/Installation.jsx";
import AppDetails from "./Components/AppDetails/AppDetails.jsx";
import Error404 from "./Components/Error404/Error404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: () => fetch("/data.json"),
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data2.json"),
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: ":id",
        Component: AppDetails,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
