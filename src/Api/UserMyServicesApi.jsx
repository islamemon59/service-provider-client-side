import React from 'react';
import ContextHook from '../Hooks/ContextHook';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const UserMyServicesApi = () => {
    const axiosSecure = UseAxiosSecure()

    const myServicesPromise = email => {
        return axiosSecure.get(`myServices?email=${email}`)
        .then(res => res.data)
    }

    return {
        myServicesPromise
    }
};

export default UserMyServicesApi;