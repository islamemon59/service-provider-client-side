import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            This is root
            <Outlet></Outlet>
        </div>
    );
};

export default Root;