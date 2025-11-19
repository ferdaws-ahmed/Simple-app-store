


import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons"; 
import { Link } from "react-router";

const AllApp = ({appData}) => {


   const {id} = appData;
  
   

    return (

        

        <div>
                <Link to={`/allApps/${id}`}>
                            <div className="w-[290px] h-[350px] bg-white flex flex-col justify-center items-center m-3 p-3 rounded-md hover:shadow-2xl active:shadow-none">
                <img className="w-[270px] h-[300px] bg-gray-200 rounded-lg" src={appData.image} alt="" />
                <h3 className="text-lg font-bold mt-3 self-start ">{appData.title}</h3>
                <div className="flex justify-between items-center gap-35 self-start text-green-400 mt-3 ">
                    <button className="text-green-600 bg-gray-300 px-1 font-bold" > <FontAwesomeIcon icon={faDownload} /> <span className="text-green-600">{appData.downloads}M</span></button>
                    <button className="text-amber-400 bg-gray-100 px-1"><FontAwesomeIcon icon={faStar} /> <span className="text-amber-400 font-bold">{appData.ratingAvg}</span></button>
                </div>
               </div>
                
                </Link>
        </div>
    )
}

export default AllApp;
























