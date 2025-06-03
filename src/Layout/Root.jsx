import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-90px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
