import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLanding } from "../page/landing/MainLanding";
import { PrivateRoute } from "./PrivateRoute";
import { SignIn } from "../components/auth/SignIn";
import { SignUp } from "../components/auth/SignUp";
import { NotFound } from "../page/nodefound/NotFound";

export const AppRoutes = () => {
  const isAuthenticated = false;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLanding />,
    },
    {
      path: "/login",
      element: (
        <PrivateRoute
          component={SignIn}
          fallBackPath={"/"}
          isAllowed={!isAuthenticated}
        />
      ),
    },
    {
      path: "/register",
      element: (
        <PrivateRoute
          component={SignUp}
          fallBackPath={"/"}
          isAllowed={!isAuthenticated}
        />
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
