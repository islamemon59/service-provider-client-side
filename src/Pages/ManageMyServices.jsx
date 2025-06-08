import React, { Suspense } from 'react';
import MyServices from './MyServices';
import { myServicesPromise } from '../Api/MyServicesApi';
import ContextHook from '../Hooks/ContextHook';
import Loader from '../Shared/Loader';
import useTitle from '../Hooks/useTitle';

const ManageMyServices = () => {
    useTitle("Manage Service")
    const {user} = ContextHook()
    return (
        <div className='max-w-7xl mx-auto'>
            <Suspense fallback={<Loader></Loader>}>
                <MyServices myServicesPromise={myServicesPromise(user?.email, user?.accessToken)}></MyServices>
            </Suspense>
        </div>
    );
};

export default ManageMyServices;