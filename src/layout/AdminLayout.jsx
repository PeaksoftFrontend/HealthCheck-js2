import { Outlet } from "react-router-dom";
import { AdminHeader } from "../components/adminHeader/AdminHeader";

export const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};
