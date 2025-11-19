


import React from "react";
import Navbar from "../../components/header/Navbar/navbar";
import { Outlet } from "react-router";
import Footer from "../../components/footer/footer";


const Root = () => {


    return(
        <>
        <div className="max-w-[1240px] mx-auto px-4">
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            

        </div>
        <div className="max-w-[1440px]  mx-auto">
            <Footer></Footer>
        </div>
        </>
        
    )
}
export default Root;
