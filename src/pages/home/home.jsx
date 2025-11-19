

import React from "react";
import Banner from "./banner";
import Rating from "../ratings/ratings";
import { useLoaderData } from "react-router";
import Apps from "../apps/apps";



const Home = () =>{

const data = useLoaderData();

    return(
        <div className="bg-gray-50">
           <Banner></Banner>
           <Rating></Rating>
           <Apps data={data}></Apps>
        </div>
    )
}

export default Home;