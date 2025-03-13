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
import node from "../../public/node-js-svgrepo-com.svg";
import Image from 'next/image';
//import kali from "../../public/kali-linux-logo-AED181186E-seeklogo.com.png";
//import Bash from "../../public/Bash-scripting.webp";
import AI from "../../public/ai.png";
import Link from 'next/link';



const Services = () => {
    const experiences = [
        {
            title: 'Frontend Developer',
            company: 'No Country',
            link: 'https://www.nocountry.tech',
            logo: nocountrylogo,
            dates: 'January 2023 - January 2024',
            description:
                'Played the role of frontend developer with Typescript, Nextjs, TailwindCss, Redux, Zustand. Collaborated closely with UI/UX and backend teams.',
        },
        {
            title: 'Frontend Developer - Mobile Developer',
            company: 'SpotterGym',
            link: 'https://spotter-gym.netlify.app',
            logo: LogoSpotter,
            dates: 'February 2024 - Present',
            description:
                'Designing screens, components, and user experiences in the app. Layout views and components for all screen widths. Integrated with the backend team to consume endpoints.',
        },
    ];

    const skills = [
        javascript,
        html,
        css,
        tailwind,
        typeScript,
        firebaseLogo,
        gitLogo,
        nextjs,
        node,
        dart,
        flutter,
        linux,
        AI,
    ];

    return (
        <div id="services" className="w-full h-full bg-bluePrimary p-5">
            <h2 className="text-skyClear text-[1.5rem] md:text-[3rem] mb-8">
                Experience
            </h2>
            {/* Timeline */}
            <ol className="grid grid-cols-1 md:grid-cols-3">
                {/* por cada fila solo pueden ir tres columnas de experiencias */}
                {experiences.map((exp, index) => (
                    <li
                        key={index}
                        className="relative mb-6 sm:mb-0 col-span-1"
                    >
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg
                                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <span className="mb-5">
                                    {exp.title} -
                                </span>
                                <Link
                                    href={exp.link}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Image
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="w-[7rem] md:w-[10rem] mt-3"
                                    />
                                </Link>
                                <p>{exp.company}</p>
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-white  mt-3">
                                {exp.dates}
                            </time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                {exp.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
            <h2 className="text-skyClear text-[1.5rem] md:text-[3rem] mb-8 mt-8">
                Skills
            </h2>
            <div className="grid grid-cols-5 gap-4 w-full  lg:w-[700px] mx-auto mt-5 ">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="transition-transform duration-300 transform-gpu hover:scale-50"
                    >
                        <Image
                            className="h-auto max-w-full rounded-lg"
                            src={skill}
                            alt="Skill"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;