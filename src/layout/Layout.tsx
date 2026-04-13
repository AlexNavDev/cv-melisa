import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const Layout = () => {
  return (
    <main>
      <h1 className="h-16 pr-5 text-4xl flex items-center justify-end font-brassiere text-text-pink md:text-5xl lg:h-29.5 lg:text-[80px]">
        Melisa Oro
      </h1>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
