// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import logo from "../assets/segundoLogo.png";
import javascript from "../assets/js.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import tailwind from "../assets/tailwindcss.pngs.png";
import typeScript from "../assets/typescript.png";
import firebaseLogo from "../assets/firebaseLogo.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import IconFloat from './subComponents/IconFloat';

const Header = () => {
  
  return (
    <div id='header' className=' w-full relative h-screen flex justify-center items-center bg-bluePrimary'>
      <img src={logo} alt={"logo-flotante"} className='w-[350px] md:w-[600px]'/>
      <IconFloat image={javascript} translateX={-100} translateY={100} scale={0.5} rotate={0} />
      <IconFloat image={html} translateX={} translateY={} scale={0.5} rotate={0} />
    </div>
  )
}

export default Header;