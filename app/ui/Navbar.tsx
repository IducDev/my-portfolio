import React from 'react'
import home from "../../public/work-from-home.png"
import profile from "../../public/perfil-del-usuario.png";
import services from "../../public/cloud-service.png";
import projects from "../../public/project-management.png";
import contact from "../../public/informacion-del-contacto.png";
import Image from "next/image";
import Link from 'next/link';


const Navbar = () => {
    return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 py-4 px-3'>
        <div className='container mx-auto'>
            <div className='w-full md:w-[500px] bg-skyPrimary h-[56px] backdrop-blur-2x1 rounded-full mx-auto px-8 flex justify-between items-center'>
                <Link className="cursor-pointer" href="#header">
                    <Image
                        src={home}
                        alt='Home'
                        className='w-[1.8rem]'
                    />
                </Link>
                <Link className="cursor-pointer" href='#about'>
                    <Image
                        src={profile}
                        alt='profile'
                        className='w-[1.8rem]'
                    />
                </Link>
                <Link className="cursor-pointer" href='#services'>
                    <Image
                        src={services}
                        alt='services'
                        className='w-[1.8rem]'
                    />
                </Link>
                <Link className="cursor-pointer" href='#work'>
                    <Image
                        src={projects}
                        alt='projects'
                        className='w-[1.8rem]'
                    />
                </Link>
                <Link className="cursor-pointer" href='#contact'>
                    <Image
                        src={contact}
                        alt='contact'
                        className='w-[1.8rem]'
                    />
                </Link>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;