import { Outlet } from "react-router-dom";
import { Header } from "../components/landingPage/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
