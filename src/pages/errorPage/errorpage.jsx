

import React from "react";

import logoIcon from '../../assets/logo.png'
import error from '../../assets/error-404.png';
const ErrorPage = () =>{


    return(
        <div className="flex justify-center flex-col items-center">
            <img className="mt-30" src={error} alt="" />
            <h1 className="text-5xl font-bold mt-4">Oops, page not found!</h1>
            <p className="font-medium text-md mt-4 text-gray-400">The page you are looking for is not available.</p>

            <img className="image-rotator-fastest mt-10 w-14 h-14" src={logoIcon} alt="" />

            <button className="mt-7 bg-gradient-to-r from bg-indigo-600 to via-violet-600 px-3 py-1 font-bold rounded-md active:bg-gray-400 text-white ">Go Back!</button>
        </div>
    )
}

export default ErrorPage;