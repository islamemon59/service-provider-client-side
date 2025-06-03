import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            This is root
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;