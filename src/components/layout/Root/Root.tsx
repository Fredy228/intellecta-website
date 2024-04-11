import { Outlet } from "react-router-dom";
import { Header } from "components/UI/Header/Header";
import { Footer } from "components/UI/Footer /Footer";
import { useEffect } from "react";
import { useLocation } from "react-router";
export default function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
