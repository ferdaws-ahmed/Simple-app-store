


import React, { useEffect, useState } from "react";
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'






const Installation = () =>{

    const [installedAppList, setInstalledAppList] = useState([]);

    const [short, setShort] = useState('none')

    useEffect(()=>{
        const saveAppList = JSON.parse(localStorage.getItem('installAppList'))
        if(saveAppList) setInstalledAppList(saveAppList);
    }, [])

    const shortedItem = (()=>{
        if(short === 'size-asc'){
            return [...installedAppList].sort((a,b)=>b.downloads - a.downloads)
        }
        else if(short === 'size-desc'){
            return [...installedAppList].sort((a,b)=> a.downloads - b.downloads)
        }
        else{
            return installedAppList
        }
    }
    )()







    const handleUninstall = id => {
        const installAppList = JSON.parse(localStorage.getItem('installAppList'))
        let updateAppList = installAppList.filter(a => a.id !== id)

        setInstalledAppList(updateAppList)
       localStorage.setItem('installAppList', JSON.stringify(updateAppList));

       

        
        
    }

   

    return(
        <div>
                 
            <div className="text-center mt-20 ">
                <h1 className="text-4xl font-bold">Your Installed Apps</h1>
                <p className="text-lg font-semibold text-gray-500 mt-3">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex flex-col-reverse mt-3 sm:mt-0 sm:flex-row justify-between items-center" >
                <h2 className="text-3xl font-bold"><span>( {shortedItem.length} )</span> Apps Installed</h2>
                
                
                
                <label className="form-control w-full max-w-xs ">
                    <select className="select select-bordered" value={short} onChange={e=> setShort(e.target.value)}>
                        <option value="none">short by size</option>
                        <option value="size-asc">High-Low</option>
                        <option value="size-desc">Low-High</option>

                    </select>
                </label>

                            

            </div>
            
           <div className="mb-20">
             {
                shortedItem.map( a=> <div className="flex flex-col sm:flex-row justify-between items-center mt-10 bg-gray-100 pl-3 pr-10 rounded-lg mb-5 hover:shadow-2xl ">
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                    <img className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]" src={a.image} alt="" />
                    <div className="flex flex-col gap-4 sm:gap-7">
                        <h1 className="text-2xl font-semibold">{a.title}</h1>
                        <div className="flex gap-4">
                            <div className="flex gap-2 items-center">
                                <img className="w-5 h-5" src={downloadIcon} alt="" />
                                <div className="font-bold text-green-600">{a.downloads}M</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img className="w-5 h-5" src={ratingIcon} alt="" />
                                <div className="font-bold text-green-600">{a.ratingAvg}</div>
                            </div>
                            <div className="font-bold text-gray-500">
                                {a.size} MB
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handleUninstall(a.id)} className="text-xl font-bold bg-green-500 px-3 py-2 rounded-md hover:bg-green-400 active:text-white">Uninstall</button>
                     
                </div>
            </div> )
            }
           </div>
                    
        </div>
    )
}

export default Installation;