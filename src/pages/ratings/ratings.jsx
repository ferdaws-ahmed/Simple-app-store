

import React from "react";


const Rating = () => {


    return(
        <div className="flex flex-col justify-center items-center py-10 bg-gradient-to-r 
            from-indigo-500 to-violet-500 ">
            <h1 className=" text-3xl text-center sm:text-4xl font-bold text-white">Trusted by Millions, Built for You</h1>
            <div className="flex flex-col sm:flex-row gap-40 my-10 text-white">
                <div className="text-center space-y-3">
                    <p>Total Downloads</p>
                    <h1 className="text-5xl font-bold">29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className="text-center space-y-3">
                    <p>Total Reviews</p>
                    <h1  className="text-5xl font-bold">906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div className="text-center space-y-3">
                    <p>Active Apps</p>
                    <h1  className="text-5xl font-bold">132+</h1>
                    <p>31 more will Launch</p>
                </div>
                
            </div>
        </div>
    )
}

export default Rating ;