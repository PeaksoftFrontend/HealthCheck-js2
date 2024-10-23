import { Outlet } from "react-router-dom";
import { Header } from "../components/landingPage/Header";

export const GuestLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
