import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Layout = () => {
  return (
    <main>
      <h1 className="h-16 text-4xl flex items-center justify-end font-brassiere">
        Melisa Oro
      </h1>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
