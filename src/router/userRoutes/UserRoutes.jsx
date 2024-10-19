import { Contacts } from "../../components/user/Contacts";
import { PrivateRoute } from "../PrivateRoute";
import { Price } from "../../components/user/Price";
import { Doctors } from "../../components/user/Doctors";
import { Services } from "../../components/user/Services";
import { AboutClinic } from "../../components/user/AboutClinic";
import { Navigate } from "react-router-dom";
import { MainLanding } from "../../page/landing/MainLanding";
import { Profile } from "../../components/user/Profile";
import { Register } from "../../components/user/Register";
import { GetResults } from "../../components/user/GetResults";
import { OnlineRegistration } from "../../components/user/OnlineRegistration";

export const UserRoutes = () => {
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
    {
      path: "profile",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={Profile}
        />
      ),
    },
    {
      path: "register",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={Register}
        />
      ),
    },
    {
      path: "results",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={GetResults}
        />
      ),
    },
    {
      path: "online",
      element: (
        <PrivateRoute
          fallBackPath="/"
          isAllowed={isAuthenticated}
          Component={OnlineRegistration}
        />
      ),
    },
  ];
};
