import { Contacts } from "../../components/user/Contacts";
import { PrivateRoute } from "../PrivateRoute";
import { Price } from "../../components/user/Price";
import { Doctors } from "../../components/user/Doctors";
import { Services } from "../../components/user/Services";
import { AboutClinic } from "../../components/user/AboutClinic";
import { Navigate } from "react-router-dom";
import { MainLanding } from "../../page/landing/MainLanding";

export const Guestroutes = () => {
  const isAuthenticated = true;
  return [
    {
      path: "",
      element: <Navigate to="homepage" />,
    },
    {
      path: "homepage",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={MainLanding}
        />
      ),
    },
    {
      path: "about-clinic",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={AboutClinic}
        />
      ),
    },
    {
      path: "services",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={Services}
        />
      ),
    },
    {
      path: "doctors",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={Doctors}
        />
      ),
    },
    {
      path: "price",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={Price}
        />
      ),
    },
    {
      path: "contacts",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={Contacts}
        />
      ),
    },
  ];
};
