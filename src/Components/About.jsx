/* eslint-disable no-unused-vars */
import React from 'react'
import avatar from "../assets/miperfil.jpg"
//import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div id='about' className='about w-full h-screen bg-bluePrimary'>
      <div className='container w-full  h-screen mx-auto grid grid-cols-2 justify-center items-center gap-3 px-5 py-5'>
        <div className='col-span-2 md:col-span-1 w-full text-center md:text-left'>
          <h1 className='text-skyClear text-[1.5rem] md:text-[3rem] '>Isaac Urdaneta</h1>
          <div>
            <span className='mr-5 text-skyClear text-[1rem] md:text-[1rem] '>I am</span>
            <TypeAnimation sequence={[
              "TypeScript/javascript Developer",
              2000,
              "Frontend Developer",
              2000,
              "Mobile Developer",
              2000,
              "Backend Developer in training"
            ]}
            speed={50}
            className='mr-5 text-skyClear text-[1rem] md:text-[1rem] '
            wrapper='span'
            repeat={Infinity}/>
          </div>
          <p className='text-white mt-4 '>
            Expert frontend developer in react.js,
             with exceptional skills in creating pleasant 
             and optimized user experiences, both on mobile 
             and desktop devices. With a focus on efficiency 
             and scalability, I constantly look for opportunities 
             for improvement and learning, contributing to the success 
             of projects and teams.
          </p>
         
          <button type="button" className="mt-[1rem] py-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ background: 'linear-gradient(to right, #12152c, #123e73, #1fa7d4, #20dad9, #93e9e7)' }}>
            <a className='text-[1.5rem]' target='_blank' rel='noreferrer'  href='https://drive.google.com/file/d/1zPb6mi4zsTdgfq1lipLbY7ldizi9KFoO/view' >
              Download CV
            </a>
          </button>
          
        </div>
        {/*<div className='col-span-2 md:col-span-1 w-full text-center md:text-left'>
          
        </div>*/}
        <div className='col-span-2 md:col-span-1 w-full flex justify-center'>
          <img src={avatar} alt='avatar-profile' className='h-[350px] rounded-full' />
        </div>
      </div>

    </div>
  )
}

export default About