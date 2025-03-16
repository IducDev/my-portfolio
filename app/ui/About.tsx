import React from 'react'
import avatar from "../../public/miperfil.jpg";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='about w-full md:h-screen h-full bg-bluePrimary'>
      <div className='container w-full h-full  mx-auto grid grid-cols-2 justify-center items-center gap-3 px-5 py-5'>
        <div className='col-span-2 md:col-span-1 w-full text-center md:text-left'>
          <h1 className='text-skyClear text-[1.5rem] md:text-[3rem] '>Isaac Urdaneta</h1>
          <div>
            <span className='mr-5 text-skyClear text-[1rem] md:text-[1rem] '>I am a</span>
            <TypeAnimation sequence={[
              "TypeScript/javascript Developer",
              3500,
              "Frontend Developer",
              3500,
              "Dart/Flutter developer",
              3500,
              "Mobile Developer",
            ]}
            speed={50}
            className='mr-5 text-skyClear text-[1rem] md:text-[1rem] '
            wrapper='span'
            repeat={Infinity}/>
          </div>
          <p className='text-white mt-4 '>
            With a solid foundation in modern web and mobile development, I bring hands-on experience in: TypeScript & Next.js: 
            Building scalable, high-performance web applications with TypeScript and Next.js, leveraging server-side rendering (SSR) and static site generation (SSG) for optimal user experiences. Dart & Flutter: Developing cross-platform mobile applications with Flutter, creating beautiful and responsive UIs that work seamlessly on Android. PostgreSQL & Supabase: Designing and managing robust databases with PostgreSQL, and utilizing Supabase for backend development, including authentication, real-time data, and serverless functions. 
            I am passionate about creating efficient, user-friendly solutions that solve real-world problems. Let's build something amazing together!
          </p>
        
          <button type="button" className="mt-[1rem] py-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: 'linear-gradient(to right, #12152c, #123e73, #1fa7d4, #20dad9, #93e9e7)' }}>
            <Link className='text-[1.5rem]' target='_blank' rel='noreferrer'  href='https://drive.google.com/file/d/1MlDE3Oid7nTjUW8WsffUULEbnFdg2Hma/view?usp=sharing' >
              Download CV
            </Link>
          </button>
          
        </div>
        <div className='col-span-2 md:col-span-1 w-full flex justify-center'>
          <Image src={avatar} alt='avatar-profile' className='rounded-full' width={350} height={350} />
        </div>
      </div>
    </div>
  )
}

export default About;
