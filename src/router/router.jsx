import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { NotFound } from "../page/notFound/NotFound";
import { AdminRoutes } from "./adminRoutes/AdminRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AdminLayout } from "../layout/AdminLayout";
import { UserRoutes } from "./userRoutes/UserRoutes";
import { Layout } from "../layout/Layout";
import { Guestroutes } from "./guestRoutes/GuestRoutes";
import { GuestLayout } from "../layout/GuestLayout";

const userRole = "GUEST";

export const AppRoutes = () => {
  const path = {
    USER: "/user",
    ADMIN: "/admin",
    GUEST: "/guest",
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={path[userRole]} replace />,
    },
    {
      path: "/admin",
      element: (
        <PrivateRoute
          Component={AdminLayout}
          isAllowed={userRole === "ADMIN"}
          fallBackPath={"/"}
        />
      ),
      children: AdminRoutes(),
    },
    {
      path: "/user",
      element: (
        <PrivateRoute
          Component={Layout}
          isAllowed={userRole === "USER"}
          fallBackPath={"/"}
        />
      ),
      children: UserRoutes(),
    },
    {
      path: "/guest",
      element: (
        <PrivateRoute
          Component={GuestLayout}
          isAllowed={userRole === "GUEST"}
          fallBackPath={"/"}
        />
      ),
      children: Guestroutes(),
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
