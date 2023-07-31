// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../assets/segundoLogo.png";
import javascript from "../assets/js.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import tailwind from "../assets/tailwindcss.pngs.png";
import typeScript from "../assets/typescript.png";
import firebaseLogo from "../assets/firebaseLogo.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";

const Header = () => {
  return (
    <div id='header' className=' w-full relative h-screen flex justify-center items-center bg-bluePrimary'>
        <img src={logo} alt={"logo-flotante"} className='w-[350px] md:w-[600px]' />
        {/*<div className='header-images-logo-container'>
          <img src={javascript} alt='javascript' className='icono-flotante effect-scale'/>
          <img src={html} alt='html' className='icono-flotante effect-scale-2'/>
          <img src={css} alt='html' className='icono-flotante effect-scale'/>
          <img src={tailwind} alt='html' className='icono-flotante effect-scale-2'/>
          <img src={typeScript} alt='html' className='icono-flotante effect-scale'/>
          <img src={firebaseLogo} alt="logo" className="icono-flotante effect-scale-2"/>
          <img src={gitLogo} alt="logo" className="icono-flotante effect-scale"/>
          <img src={githubLogo} alt="logo" className="icono-flotante effect-scale-2"/>
        </div>*/}
    </div>
  )
}

export default Header;