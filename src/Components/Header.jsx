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
import linux from "../assets/linux-svgrepo-com.svg";
import express from "../assets/express-svgrepo-com.svg";
import grapfQL from "../assets/graphql-svgrepo-com.svg";
import nest from "../assets/logo-small.svg";
import mongoDB from "../assets/mongo-svgrepo-com.svg";
import redux from "../assets/redux-logo.svg";
import node from "../assets/node-js-svgrepo-com.svg";

//icon Component
import IconFloat from './subComponents/IconFloat';


const Header = () => {
  return (
    <div id='header' className=' w-full relative h-screen flex justify-center items-center bg-bluePrimary'>
      <img src={logo} alt={"logo-flotante"} className='w-[350px] md:w-[600px]'/>
      <IconFloat image={javascript} top={7} left={7} invert={true} /> 
      <IconFloat image={html} top={15} left={15} invert={false} />
      <IconFloat image={css} top={65} left={65} invert={true} />
      <IconFloat image={tailwind} top={85} left={85} invert={false} />
      <IconFloat image={typeScript} top={30} left={30} invert={true} />
      <IconFloat image={firebaseLogo} top={45} left={25} invert={false} />
      <IconFloat image={gitLogo} top={66} left={66} invert={true} />
      <IconFloat image={githubLogo} top={75} left={54} invert={false} />
      <IconFloat image={linux} top={36} left={18} invert={true} />
      <IconFloat image={express} top={86} left={25} invert={false} />
      <IconFloat image={grapfQL} top={50} left={75} invert={true} />
      <IconFloat image={nest} top={50} left={45} invert={false} />
      <IconFloat image={mongoDB} top={40} left={25} invert={true} />
      <IconFloat image={redux} top={40} left={40} invert={false} />
      <IconFloat image={node} top={96} left={69} invert={true} />
    </div>
  )
}

export default Header;