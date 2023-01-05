import React, { useState } from 'react';
import { FaBars,FaRoute }from "react-icons/fa";
import { AiFillHome }from "react-icons/ai";
import { GiDeliveryDrone }from "react-icons/gi";
import { HiOutlineRefresh }from "react-icons/hi";
import { TbWind }from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"VM",
            icon:<AiFillHome/>
        },
        {
            path:"/",
            name:"Home",
            icon:<AiFillHome/>
        },
        {
            path:"/",
            name:"Live Status",
            icon:<GiDeliveryDrone/>
        },
        {
            path:"/",
            name:"Refresh",
            icon:<HiOutlineRefresh/>
        },
        {
            path:"/",
            name:"Route Management",
            icon:<FaRoute/>
        },
        {
            path:"/",
            name:"Wind Flow",
            icon:<TbWind/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="w-60 text-black">DM-Airtech</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
            </div>
            
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;