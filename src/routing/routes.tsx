import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";
// import GameDetailPage from "../components/pages/GameDetailPage";
import ErrorPage from "../components/pages/ErrorPage";
import AboutPage from "../components/pages/AboutPage";
import FaqPage from "../components/pages/FaqPage";
import ProjectPage from "../components/pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <HomePage /> },
      // { index: true, element: <AboutPage /> },
      { index: true, element: <ProjectPage /> },
      // { index: true, element: <FaqPage /> },
      // { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
