// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion} from "framer-motion";

// eslint-disable-next-line react/prop-types
const IconFloat = ({image, top, left, invert}) => {
  return (
    <div>
      <motion.div
        animate={invert ? { y: [-50, 50, -50] } : { y: [50, -50, 50] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{left:`${left}%`, top:`${top}%`}}
        className={`absolute w-[50px]`}
      >
        <img src={image} alt="icono flotante"/>
      </motion.div>
    </div>
  )
}

export default IconFloat;