import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <header className="w-full px-8 h-20 fixed top-0 z-20 flex items-center justify-center">
        <Header />
      </header>
      <main className="pt-20 z-10">
        <Outlet />
      </main>
      <footer className="z-0">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
