import React, { useState, useEffect } from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useParams } from "react-router";
import Rating from "../ratings/ratings";
import useApps from "../hooks/useApps";


import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'




const AppDetails = () =>{

    const {id} = useParams();
    const {apps, loading} = useApps();

    const app = apps.find(a => a.id=== Number(id) );

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        if (app) {
            const appList = JSON.parse(localStorage.getItem('installAppList')) || [];
            const alreadyInstalled = appList.some(a => a.id === app.id);
            setIsInstalled(alreadyInstalled);
        }
    }, [app]);

    if (loading || !app) return <span className="loading loading-spinner loading-xl"></span>



    const handleAddToInstalled = () =>{
    
        if (isInstalled) return; 

        const appList = JSON.parse(localStorage.getItem('installAppList')) || [];

        let updateAppList = [];

        if(appList) {
            const isDuplicate = appList.some(a=> a.id === app.id);
            if(isDuplicate) return alert('App is already installed.')
                updateAppList = [...appList, app]
        } else{
            updateAppList.push(app)
        }

        localStorage.setItem('installAppList', JSON.stringify(updateAppList))
        
        setIsInstalled(true); 

        
    }

    return(
        <div>
            <div className="flex flex-col sm:flex-row gap-3 mt-20  pb-3 mb-5  h-[380px]">
                <div className=" w-full h-auto sm:w-[500px] sm:h-[500px]">
                    <img  className="w-[350px] h-[350px]" src={app.image} alt="" />
                </div>
                <div className="">
                    <div className="border-b-1 border-gray-600 pb-5">
                        <h1 className="text-3xl sm:text-4xl font-bold">{app.title}</h1>
                        <p className="text-lg font-semibold"><small>Developed by <span className="text-violet-700 ">productive.io</span></small></p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-20 mt-14 ">
                        <div className="space-y-3">
                            <img src={downloadIcon} alt="" />
                            <p>Downloads</p>
                            <h1 className="text-5xl font-bold">{app.downloads}M</h1>
                        </div>
                        <div className="space-y-3">
                            <img src={ratingIcon} alt="" />
                            <p>Average Ratings</p>
                            <h1 className="text-5xl font-bold">{app.ratingAvg}</h1>
                        </div>
                        <div className="space-y-3">
                            <img src={reviewIcon} alt="" />
                            <p>Total Reviews</p>
                            <h1 className="text-5xl font-bold">{app.reviews}</h1>
                        </div>
                        
                    </div>
                    
                    <div className="mt-10 mx-auto text-center sm:text-left" >
                        <button  
                            disabled={isInstalled} 
                            onClick={handleAddToInstalled} 
                            className={`text-xl font-bold px-3 py-2 rounded-md active:text-white 
                                ${isInstalled 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-green-500 hover:bg-green-400'
                                }`}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>
            </div>

             

   {/* barChart */}

            <div className="mt-[800px] sm:mt-10 p-5 border-t border-gray-300">
                <h2 className="text-3xl font-bold mb-5">Ratings</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart 
                        data={app.ratings} 
                        layout="vertical" 
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        
                        <XAxis 
                            type="number" 
                        /> 
                        
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                        />
                        
                        <Tooltip />
                        <Legend />
                        
                       
                        <Bar 
                            dataKey="count" 
                            name="Total Ratings" 
                            fill="#8884d8" 
                            
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="border-t border-gray-300"></div>

{/* barChart */}

           <div className="mt-20">
            <h1 className="text-3xl font-bold underline">Description</h1>
            <p className="mt-8 mb-14 ml-3 ">
                {app.description}
            </p>    
           </div>
            
        </div>
    )
}

export default AppDetails;
