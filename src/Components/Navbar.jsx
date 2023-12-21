// eslint-disable-next-line no-unused-vars
import React from 'react'
import home from "../assets/work-from-home.png"
import profile from "../assets/perfil-del-usuario.png";
import services from "../assets/cloud-service.png";
import projects from "../assets/project-management.png";
import contact from "../assets/informacion-del-contacto.png";


const Navbar = () => {
    return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 py-4 px-3'>
        <div className='container mx-auto'>
            <div className='w-full md:w-[500px] bg-skyPrimary h-[56px] backdrop-blur-2x1 rounded-full mx-auto px-8 flex justify-between items-center'>
                <a className="cursor-pointer" href="#header">
                    <img src={home} alt='home' className='w-[1.8rem]' />
                </a>
                <a className="cursor-pointer" href='#about'>
                    
                    <img src={profile} alt='home' className='w-[1.8rem]' />
                </a>
                <a className="cursor-pointer" href='#services'>
                    <img src={services} alt='home' className='w-[1.8rem]' />
                </a>
                <a className="cursor-pointer" href='#work'>
                    <img src={projects} alt='home' className='w-[1.8rem]' />
                </a>
                <a className="cursor-pointer" href='#contact'>
                    <img src={contact} alt='home' className='w-[1.8rem]' />
                </a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar