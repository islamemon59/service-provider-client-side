import React from 'react';
import error from '../assets/error.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <Lottie animationData={error}></Lottie>
            <Link to="/" className='btn'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;