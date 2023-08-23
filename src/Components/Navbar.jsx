import React from 'react'
import {BiHomeAlt, BiUser} from "react-icons/bi"
import {BsClipboardData, BsBriefcase} from "react-icons/bs";
import {RiContactsLine} from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 py-4 px-3'>

        <div className='container mx-auto'>
            <div className='w-full md:w-[500px] bg-skyPrimary h-[56px] backdrop-blur-2x1 rounded-full mx-auto px-8 flex justify-between items-center'>
                <a className="cursor-pointer" href="#header">
                    <BiHomeAlt/>
                </a>

                <a className="cursor-pointer" href='#about'>
                    <BiUser/>
                </a>

                <a className="cursor-pointer" href='#services'>
                    <BsClipboardData/>
                </a>

                <a className="cursor-pointer" href='#work'>
                    <BsBriefcase/>
                </a>
                <a className="cursor-pointer" href='#contact'>
                    <RiContactsLine/>
                </a>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar