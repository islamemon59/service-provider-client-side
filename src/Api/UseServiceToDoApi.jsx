import React from 'react';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const UseServiceToDoApi = () => {

    const axiosSecure = UseAxiosSecure()

    const myServiceToDoPromise = email => {
        return axiosSecure.get(`service-to-do?email=${email}`)
        .then(res => res.data)
    }

    return {
        myServiceToDoPromise
    }
};

export default UseServiceToDoApi;