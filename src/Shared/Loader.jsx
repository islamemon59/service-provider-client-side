import Lottie from 'lottie-react';
import React from 'react';
import loader from '../../src/assets/loader.json'

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Lottie animationData={loader}></Lottie>
        </div>
    );
};

export default Loader;