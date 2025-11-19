

import React from "react";
import '../../../../src/index.css'
import logo from '../../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router";
const Navbar = () => {



    return(
        <div className="flex flex-col sm:flex-row space-y-4 items-center justify-between mt-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
               <img className="w-[50px] image-rotator" src={logo} alt="" />
               <NavLink to='/'><span className="font-bold text-2xl text-violet-500 cursor-pointer"><span className="text-red-500 text-3xl">H</span>ero.io</span></NavLink>
            </div>
            <div>
                <ul className="flex flex-col sm:flex-row gap-4 items-center font-semibold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allApps'>Apps</NavLink></li>
                    <li><NavLink to='/installation'>Installation</NavLink></li>
                </ul> 
            </div>
            <div className="text-xl font-bold flex flex-col sm:flex-row gap-1 items-center bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-md text-white">
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/ferdaws-ahmed" target="_blank"><button className="cursor-pointer active:text-black">Contribute</button></a>
            </div>
        </div>
    )
}

export default Navbar;