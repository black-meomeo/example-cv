import React from "react"
import {navLinks} from "../constants"
import { useState } from "react"
import {menu,close} from '../assets'


const Navbar = ()=>  {

    const [toggle, setToggle] = useState(false)

    return(
    
    <nav className="w-full flex py-6 justify-between items-center ">
        <h4 className="font-comfortaa font-normal text-[20px]">Tran Hieu</h4>

        <ul className="list-none hidden sm:flex justify-end items-center flex-1 mr-16">
            {navLinks.map((navLink,index )=>
             <li key={navLink.id}
                className={`font-comfortaa cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${navLink.id}`}>{navLink.title}</a>
             </li>
            )}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'> 
          <img 
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain color-icon'
            onClick={() => setToggle(!toggle)}
           />
           <div className={` ${toggle ? 'flex' : 'hidden' } bg-slate-500 p-6 absolute top-20 right-0 rounded-xl mx-4 my-2 min-w-[120px] sidebar  `}>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                {navLinks.map((navLink,index) => 
                <li key={navLink.id} 
                className={` font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4' }`}>
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>)}
              </ul> 
           </div>
          
      </div>
    </nav>
)
                }

export default Navbar