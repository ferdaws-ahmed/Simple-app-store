
import noAppFoundImg from '../../assets/App-Error.png'



import React, { useEffect, useState, } from "react";

import useApps from "../hooks/useApps";
import AllApp from "../allApp/allApp";


const AllApps = () =>{
  
  const { apps} = useApps();
  
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase()
  const searchApps = term ? apps.filter( app => app.title.toLocaleLowerCase().includes(term)) : apps


       
        useEffect(() => {
            
            if (term.length > 0) {
            setLoading(true);

            
            const timer = setTimeout(() => {
                setLoading(false);
            }, 500); 

           
            return () => clearTimeout(timer);
            } else {
            
            setLoading(false);
            }
        }, [term]); 



    return(
        <div>
            <div className="mx-auto text-center mt-20">
                <h1 className="text-5xl font-bold">Our All Applications</h1>
            <p className="mt-5 text-gray-500 text-lg font-medium ">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
                <h4 className="text-3xl font-bold mx-5 mt-10">(<span>{searchApps.length}</span>) Apps Found</h4>

                   <label className="input mx-5 mt-10">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input value={search} onChange={e=> setSearch(e.target.value)} type="search" required placeholder="Search" />
                    </label>

            </div>



           




            
             {
                
                loading ? (
                    
                    <div className="flex justify-center items-center h-[50vh]">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
                        <h2 className="ml-5 text-2xl font-semibold text-purple-600">Searching...</h2>
                    </div>
                )
                
                : searchApps.length === 0 && term.length > 0 ? (

                    <div className="flex flex-col justify-center items-center h-[50vh] text-center">
                        <img 
                            src={noAppFoundImg}
                            alt="No Apps Found" 
                            className="w-64 h-64 mx-auto mb-4"
                        />
                    <h2 className="text-4xl font-bold text-gray-500">
                            No Apps Found for "{search}" 😟
                    </h2>
                    </div> ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-4 mt-3">
                        {
                        searchApps.map(appData => <AllApp key={appData.id} appData={appData}></AllApp>)
                        }
                    </div>
                    )
                 }
                            </div>
                        )
                }
export default AllApps;