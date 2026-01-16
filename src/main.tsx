import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// components import
import Root from "@/Root.tsx";
import Home from "@/routes/Home.tsx";
import About from "@/routes/About.tsx";
import Services from "@/routes/Services.tsx";
import Career from "@/routes/Career.tsx";
import Process from "@/routes/Process";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "career", element: <Career /> },
      { path: "process", element: <Process /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
