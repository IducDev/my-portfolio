// eslint-disable-next-line no-unused-vars
import React from 'react';
import nocountrylogo from "../assets/nocountrylogo.png"
import javascript from "../assets/js.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import tailwind from "../assets/tailwindcss.pngs.png";
import typeScript from "../assets/typescript.png";
import firebaseLogo from "../assets/React-icon.svg.png";
import gitLogo from "../assets/git.png";
import nextjs from "../assets/next.js.png";
import linux from "../assets/linux-svgrepo-com.svg";
import dart from "../assets/dart-icon.png";
import flutter from "../assets/flutter-icon.png";
import redux from "../assets/redux-logo.svg";
import node from "../assets/node-js-svgrepo-com.svg";
import zustand from "../assets/zustand.png"
const Services = () => {
    return(
    <div id='services' className='w-full  bg-bluePrimary p-5 '>
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
                        <img src={nocountrylogo} alt="no-country" className="w-[7rem] md:w-[10rem] mt-3"  />
                        </a>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-3">Released on January, 2023</time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Perform tasks such as layout designer, endpoint consumption, centralized and persistent state management, project deployment.
                    </p>
                </div>
            </li>
        </ol>
        <h2 className='text-skyClear text-[1.5rem] md:text-[3rem] mb-8 mt-8'>Skills</h2>
        <div className="grid grid-cols-5 gap-4 w-full lg:w-[700px] mx-auto mt-5">
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={javascript}  alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={html} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={css} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={tailwind} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={typeScript} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={firebaseLogo} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={gitLogo} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={nextjs} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={linux} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={dart} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={flutter} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={redux} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="w-[280px] h-[100px] rounded-lg" src={zustand} alt="img"/>
                </div>
                <div className="transition-transform duration-300 transform-gpu hover:scale-50">
                    <img className="h-auto max-w-full rounded-lg" src={node} alt="img"/>
                </div>
        </div>
    </div>
    )
}

export default Services;