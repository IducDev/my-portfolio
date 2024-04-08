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
import nextjs from "../assets/next.js.png";
import linux from "../assets/linux-svgrepo-com.svg";
import prisma from "../assets/prisma.png";
import grapfQL from "../assets/graphql-svgrepo-com.svg";
import nest from "../assets/logo-small.svg";
import postgresql from "../assets/base-de-datos.png";
import redux from "../assets/redux-logo.svg";
import node from "../assets/node-js-svgrepo-com.svg";
//icon Component
import IconFloat from './subComponents/IconFloat';

const Header = () => {
  return (
    <div id='header' className=' w-full relative h-screen flex justify-center items-center bg-bluePrimary'>
      <img src={logo} alt={"logo-flotante"} className='w-[350px] md:w-[600px]'/>
      <IconFloat image={javascript} top={10} left={10} invert={true} /> 
      <IconFloat image={html} top={10} left={90} invert={false} />
      <IconFloat image={css} top={25} left={65} invert={true} />
      <IconFloat image={tailwind} top={25} left={85} invert={false} />
      <IconFloat image={typeScript} top={23} left={19} invert={true} />
      <IconFloat image={firebaseLogo} top={80} left={25} invert={false} />
      <IconFloat image={gitLogo} top={66} left={80} invert={true} />
      <IconFloat image={nextjs} top={75} left={10} invert={false} />
      <IconFloat image={linux} top={36} left={8} invert={true} />
      <IconFloat image={prisma} top={86} left={20} invert={false} />
      <IconFloat image={grapfQL} top={50} left={75} invert={true} />
      <IconFloat image={nest} top={50} left={85} invert={false} />
      <IconFloat image={postgresql} top={40} left={25} invert={true} />
      <IconFloat image={redux} top={50} left={20} invert={false} />
      <IconFloat image={node} top={96} left={69} invert={true} />
    </div>
  )
}

export default Header;