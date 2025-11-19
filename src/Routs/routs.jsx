

import React from "react";




import { createBrowserRouter } from "react-router";
import Root from "../pages/root/root";
import ErrorPage from "../pages/errorPage/errorpage";
import Home from "../pages/home/home";
import AllApps from "../pages/allApps/allApps";
import Installation from "../pages/installation/installation";
import AppDetails from "../pages/appDetails/appDetails";
import ErrorAppPage from "../pages/errorAppPage/errorAppPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path: "/",
            loader: ()=> fetch('homeApp.json'),
            Component:Home
        },
         {
          
          errorElement: <ErrorAppPage></ErrorAppPage>,
          children:[

            {
            path: '/allApps',
            loader: ()=>fetch('allApp.json'),
            Component:AllApps
        },
        {
            path: '/installation',
            Component: Installation
        },
        {
          path: '/allApps/:id',
          Component:AppDetails
        }
          ]
         }
        
        
    ]
  }
]);