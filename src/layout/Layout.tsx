import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Layout = () => {
  return (
    <main>
      <h1>Melisa Oro</h1>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
