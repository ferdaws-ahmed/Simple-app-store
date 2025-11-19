import React from "react";
import googlePlay from '../../assets/google-play.png';
import appStore from '../../assets/app-store.png';
import bannerImg from '../../assets/hero.png'

const Banner = () => {


    return(
        <div className="mx-20">
            <div>
                <h1 className=" w-[70%] font-extrabold text-4xl sm:text-8xl mx-auto text-center my-10">We Build <span className="bg-gradient-to-r 
            from-red-500 to-yellow-500 
            text-transparent 
            bg-clip-text">Productive</span> Apps</h1>
            <p className="w-[80%] mx-auto text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex flex-col sm:flex-row  gap-5 justify-center items-center mt-10">
                <a href="https://play.google.com/store/apps?hl=en" target="_blank"><button className="flex gap-1 border border-gray-300 px-4 py-1 cursor-pointer hover:shadow-lg active:shadow-none"> <img src={googlePlay} className="w-[20px]" /> Google Play</button></a>
                <a href="https://apps.microsoft.com/apps?hl=en-US&gl=US" target="_blank"><button className="flex gap-1 border border-gray-300 px-5 py-1 cursor-pointer hover:shadow-lg active:shadow-none"><img src={appStore} className="w-[25px]"/>  App Store</button></a>
            </div>
            </div>
            <img className="mx-auto mt-20" src={bannerImg} />
        </div>
    )
}

export default Banner;