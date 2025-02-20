import React from 'react';
import logo from "../../public/iducdev.png";
import Image from 'next/image';

const Header = () => {
  return (
    <div id='header' className=' w-full relative h-screen flex justify-center items-center bg-bluePrimary'>
      <Image src={logo} alt={"logo-flotante"} className='w-[350px] md:w-[600px]'/>
      
      {/*
      <IconFloat image={javascript} top={10} left={10}  /> 
      <IconFloat image={html} top={10} left={90}  />
      <IconFloat image={css} top={25} left={65}  />
      <IconFloat image={tailwind} top={25} left={85}  />
      <IconFloat image={typeScript} top={23} left={19}  />
      <IconFloat image={gitLogo} top={66} left={80}  />
      <IconFloat image={nextjs} top={75} left={10}  />
      <IconFloat image={linux} top={36} left={8}  />
      <IconFloat image={dart} top={86} left={20}  />
      <IconFloat image={flutter} top={50} left={75}  />
      <IconFloat image={reactLogo} top={50} left={20}  />
      <IconFloat image={node} top={70} left={69}  />
      <IconFloat image={AI} top={40} left={80}  />
        <IconFloat image={Bash} top={90} left={69}  />
        <IconFloat image={kali} top={40} left={25}  />
      */}
    </div>
  )
}

export default Header;