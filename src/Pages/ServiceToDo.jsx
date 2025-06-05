import React, { Suspense } from 'react';
import ServiceToDoPromise from './ServiceToDoPromise';
import { myServiceToDoPromise } from '../Api/ServiceToDoAPi';
import ContextHook from '../Hooks/ContextHook';
import Loader from '../Shared/Loader';
import useTitle from '../Hooks/useTitle';

const ServiceToDo = () => {
    useTitle("Service To Do")
    const {user} = ContextHook()
    return (
        <div>
            <div>
                <Suspense fallback={<Loader></Loader>}>
                    <ServiceToDoPromise myServiceToDoPromise={myServiceToDoPromise(user?.email, user?.accessToken)}></ServiceToDoPromise>
                </Suspense>
            </div>
        </div>
    );
};

export default ServiceToDo;