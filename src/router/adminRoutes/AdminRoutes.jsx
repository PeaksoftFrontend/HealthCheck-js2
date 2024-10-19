import { AdminPage } from "../../page/adminPage/AdminPage";
import { PrivateRoute } from "../PrivateRoute";
import { Specialists } from "../../components/admin/Specialists";
import { AddSpecialist } from "../../components/admin/AddSpecialist";
import { Schedule } from "../../components/schedule/Schedule";
import { Navigate } from "react-router-dom";

export const AdminRoutes = () => {
  const isAuthenticated = true;
  return [
    {
      path: "",
      element: <Navigate to={"schedule"} />,
    },
    {
      path: "schedule",
      element: (
        <PrivateRoute
          fallBackPath="/admin"
          isAllowed={isAuthenticated}
          Component={Schedule}
        />
      ),
    },
    {
      path: "schedule",
      element: (
        <PrivateRoute
          fallBackPath="/admin"
          isAllowed={isAuthenticated}
          Component={Schedule}
        />
      ),
    },
    {
      path: "applications",
      element: (
        <PrivateRoute
          fallBackPath="/admin"
          isAllowed={isAuthenticated}
          Component={AddSpecialist}
        />
      ),
    },
    {
      path: "specialists",
      element: (
        <PrivateRoute
          fallBackPath="/admin"
          isAllowed={isAuthenticated}
          Component={Specialists}
        />
      ),
    },
    {
      path: "patients",
      element: (
        <PrivateRoute
          fallBackPath="/admin"
          isAllowed={isAuthenticated}
          Component={AdminPage}
        />
      ),
    },
  ];
};
