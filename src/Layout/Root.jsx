import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="z-10">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-60px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
