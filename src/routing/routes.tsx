import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/pages/Layout";
import HomePage from "../components/pages/HomePage";

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
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectPage /> },
      { path: "/faq", element: <FaqPage /> },
    ],
  },
  {
    path: "/about",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <AboutPage /> }],
  },
]);

export default router;
