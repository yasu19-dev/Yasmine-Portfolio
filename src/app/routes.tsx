import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projet/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);
