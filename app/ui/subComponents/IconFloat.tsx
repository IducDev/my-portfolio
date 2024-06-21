
import React from 'react'
import {motion} from "framer-motion";
import Image from 'next/image';

// eslint-disable-next-line react/prop-types
const IconFloat = ({image, top, left}:{image:any, top:any, left:any}) => {
  return (
    <div>
      <motion.div
        //animate={invert ? { y: [-50, 50, -50] } : { y: [50, -50, 50] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{left:`${left}%`, top:`${top}%`}}
        className={`absolute w-[50px]`}
      >
        <Image src={image} alt="icono flotante"/>
      </motion.div>
    </div>
  )
}

export default IconFloat;