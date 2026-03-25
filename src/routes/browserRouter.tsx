import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import { AuthorizationPage } from "../pages/authorizationPage";
import { LayoutPage } from "../pages/layoutPage";
import { MainPage } from "../pages/mainPage";
import { NotFoundPage } from "../pages/notFoundPage";
import { ProtectedRoute } from "./ProtectedRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LayoutPage />,
        children: [
          {
            path: "/",

            element: (
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            ),
          },
        ],
      },

      { path: "login", element: <AuthorizationPage /> },
      {
        path: "notFound",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <Navigate replace to="notFound" />,
      },
    ],
  },
]);
