// hooks import
import { Outlet } from "react-router";
// components import
import Header from "@/components/header/Header";
import SmoothScroll from "./components/utils/SmoothScroll";

// styles import
import "@/styles/variables.css";
import "@/styles/resets.css";
import "@/styles/globals.css";
import "@/styles/helpers.css";

const Root = () => {
  return (
    <SmoothScroll>
      <div className="root">
        <Header />

        <Outlet />
      </div>
    </SmoothScroll>
  );
};

export default Root;
