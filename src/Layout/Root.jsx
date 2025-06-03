import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            This is root
            <Outlet></Outlet>
        </div>
    );
};

export default Root;