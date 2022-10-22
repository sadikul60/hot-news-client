import React from 'react';
import { FaSadTear } from 'react-icons/fa';

const ErrorHandle = () => {
    return (
        <div className='text-center w-50 mx-auto align-items-center '>
            <FaSadTear className='w-25 h-25 mt-5'></FaSadTear>
            <h1 className='display-1 fw-bold text-info'>404</h1>
            <h3 className='fw-bold'>Sorry, page not found</h3>
        </div>
    );
};

export default ErrorHandle;