import React from 'react';
import logo from "../../public/iducdev.png";
import javascript from "../../public/js.png";
import html from "../../public/html-5.png";
import css from "../../public/css-3.png";
import tailwind from "../../public/tailwindcss.pngs.png";
import typeScript from "../../public/typescript.png";
import firebaseLogo from "../../public/firebaseLogo.png";
import gitLogo from "../../public/git.png";
import nextjs from "../../public/next.js.png";
import linux from "../../public/linux-svgrepo-com.svg";
import dart from "../../public/dart-icon.png";
import flutter from "../../public/flutter-icon.png";
import zustand from "../../public/zustand.png"
import redux from "../../public/redux-logo.svg";
import node from "../../public/node-js-svgrepo-com.svg";
//icon Component
import IconFloat from './subComponents/IconFloat';
import Image from 'next/image';

const Header = () => {
  return (
    <div id='header' className=' w-full relative h-screen flex justify-center items-center bg-bluePrimary'>
      <Image src={logo} alt={"logo-flotante"} className='w-[350px] md:w-[600px]'/>
      <IconFloat image={javascript} top={10} left={10}  /> 
      <IconFloat image={html} top={10} left={90}  />
      <IconFloat image={css} top={25} left={65}  />
      <IconFloat image={tailwind} top={25} left={85}  />
      <IconFloat image={typeScript} top={23} left={19}  />
      <IconFloat image={firebaseLogo} top={80} left={25}  />
      <IconFloat image={gitLogo} top={66} left={80}  />
      <IconFloat image={nextjs} top={75} left={10}  />
      <IconFloat image={linux} top={36} left={8}  />
      <IconFloat image={dart} top={86} left={20}  />
      <IconFloat image={flutter} top={50} left={75}  />
      <IconFloat image={zustand} top={40} left={25}  />
      <IconFloat image={redux} top={50} left={20}  />
      <IconFloat image={node} top={70} left={69}  />
    </div>
  )
}

export default Header;