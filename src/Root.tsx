// hooks import
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useLoading } from "@/hooks/useLoading";
// components import
import Header from "@/components/header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/footer/Footer";
import PageTransition from "./components/utils/pageTransition/PageTransition";

// styles import
import "@/styles/resets.css";
import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/helpers.css";

const Root = () => {
  const { loading, pageTransition } = useLoading();

  useEffect(() => {
    if (loading || pageTransition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading, pageTransition]);

  return (
    <SmoothScroll>
      <div className="root">
        <Header />

        <Outlet />

        <Footer />

        {pageTransition && <PageTransition />}
      </div>
    </SmoothScroll>
  );
};

export default Root;
