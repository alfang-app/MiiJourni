import React from 'react'

import logo2 from '../../assets/images/logo/journi-logo.svg'
import { Link, NavLink } from 'react-router-dom';

import { links } from '../../data/data';

import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
const MainNavBar = () => {
/*
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
*/
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className ="gpt3__navbar">
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
        
                <img src={logo2} alt="logo"/>
            </div>



            <div className="gpt3__navbar-links_container">



                {/* 
                <MainMenu />


                mt is a div that does the side by CSS!!!!
                <div className="mt-10 ">*/}
                  {links.map((item) => (
                    <div key={item.title}>
                     

                      <NavLink 
                        to={`/${item.title}`}
                          key={item.title}
                        
                        
                        /*
                          onClick={handleCloseSideBar}
                        
                        
                        
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? currentColor : '',
                          })}

                          
                          className={({ isActive }) => (isActive ? activeLink : normalLink)
                        }*/
                        >

                          <br/>
                    <span className="capitalize ">{item.title}</span>
                          
                        </NavLink>
                      

                      
                      
                      
                    </div>
                  ))}

                  
              {  /* </div>*/}

           </div>
        
        </div>
    </div>
  )
}

export default MainNavBar