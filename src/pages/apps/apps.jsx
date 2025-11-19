



import React, { Suspense } from "react";
import App from "../app/app";
import { NavLink } from "react-router";
import useApps from "../hooks/useApps";


const Apps = () => {

    const {apps} = useApps();
    
    const homeApps = apps.slice(0, 8);
    
    return(
        <div>
            <div className="mx-auto text-center mt-20">
                <h1 className="text-5xl font-bold">Trending Apps</h1>
            <p className="mt-5 text-gray-500 text-lg font-medium ">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-4">
               {
                homeApps.map(data => <App key={data.id} data={data}></App>)
               }
            </div>
            <div className="mx-auto text-center">
                <NavLink to='/allApps'><button className="mt-7 bg-gradient-to-r from bg-indigo-600 to via-violet-600 px-3 py-1 font-bold rounded-md active:bg-gray-400 text-white mb-4 cursor-pointer">Show All</button></NavLink>
            </div>

            
        </div>
    )
}

export default Apps;