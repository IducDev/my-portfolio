import React from 'react';
import nocountrylogo from "../../public/nocountrylogo.png"
import LogoSpotter from "../../public/Frame 145.png"
import javascript from "../../public/js.png";
import html from "../../public/html-5.png";
import css from "../../public/css-3.png";
import tailwind from "../../public/tailwindcss.pngs.png";
import typeScript from "../../public/typescript.png";
import firebaseLogo from "../../public/React-icon.svg.png";
import gitLogo from "../../public/git.png";
import nextjs from "../../public/next.js.png";
import linux from "../../public/linux-svgrepo-com.svg";
import dart from "../../public/dart-icon.png";
import flutter from "../../public/flutter-icon.png";
import redux from "../../public/redux-logo.svg";
import node from "../../public/node-js-svgrepo-com.svg";
import zustand from "../../public/zustand.png";
import figma from "../../public/figma.png"
import Image from 'next/image';



const Services = () => {
    return(
    <div id='services' className='w-full h-full   bg-bluePrimary p-5 '>
        <h2 className='text-skyClear text-[1.5rem] md:text-[3rem] mb-8'>Experience</h2>
        {/*Timeline*/}
        <ol className="grid grid-cols-1 md:grid-cols-3">
            {/*por cada fila solo pueden ir tres columnas de experiencias*/}
            
            <li className="relative mb-6 sm:mb-0 col-span-1">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <span className="mb-5">
                            Frontend Developer  - 
                        </span>
                        <a href='https://www.nocountry.tech' rel='noreferrer' target="_blank">
                        <Image src={nocountrylogo} alt="no-country" className="w-[7rem] md:w-[10rem] mt-3"  />
                        </a>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-3">From January 2023 to January 2024</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Play the role of frontend developer with the following technologies: Typescript, Nextjs, TailwindCss, Redux, Zustand. I collaborated closely with the UI/UX team and the backend team, you could say I was a kind of bridge for both worlds.
                    </p>
                </div>
            </li>

            <li className="relative mb-6 sm:mb-0 col-span-1">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        <span className="mb-5">
                            Frontend Developer  - Mobile Developer
                        </span>
                        <a href='https://www.nocountry.tech' rel='noreferrer' target="_blank" className='bg-white'>
                            <Image src={LogoSpotter} alt="no-country" className="w-[7rem] md:w-[10rem] mt-3"  />
                        </a>
                        <p>SpotterGym</p>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-3">From February 2024 - Present</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Designing the screens, 
                        components and user experiences in the app,
                        Layout views and components to fit all screen widths, 
                        Integration and communication with the backend team to consume endpoints, 
                        communication with the server.
                    </p>
                </div>
            </li>
        </ol>
        <h2 className='text-skyClear text-[1.5rem] md:text-[3rem] mb-8 mt-8'>Skills</h2>
        <div className="grid grid-cols-5 gap-4 w-full  lg:w-[700px] mx-auto mt-5 ">
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={javascript}  alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={html} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={css} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={tailwind} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={typeScript} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={firebaseLogo} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={gitLogo} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={nextjs} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={linux} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={dart} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={flutter} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={redux} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="w-[280px] h-[100px] rounded-lg" src={zustand} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={node} alt="Image"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <Image className="h-auto max-w-full rounded-lg" src={figma} alt="Image"/>
                </div>
        </div>
    </div>
    )
}

export default Services;