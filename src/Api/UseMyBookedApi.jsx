import React from 'react';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const UseMyBookedApi = () => {

    const axiosSecure = UseAxiosSecure()

    const myBookedServicesPromise = email => {
        return axiosSecure.get(`bookingServices?email=${email}`)
        .then(res => res.data)
    }

    return {
        myBookedServicesPromise
    }
};

export default UseMyBookedApi;