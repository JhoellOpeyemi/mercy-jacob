// hooks import
import { Outlet } from "react-router";
// components import
import Header from "@/components/header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/footer/Footer";

// styles import
import "@/styles/resets.css";
import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/helpers.css";

const Root = () => {
  return (
    <SmoothScroll>
      <div className="root">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Root;
