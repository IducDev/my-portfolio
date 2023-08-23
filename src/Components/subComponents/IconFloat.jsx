import React from 'react'
import {motion} from "framer-motion";


// eslint-disable-next-line react/prop-types
const IconFloat = ({image, scale, rotate, translateX, translateY, top, left}) => {

  return (
    <div>
        <motion.div
          animate={{
            y: ["0px", "100px", "0px"], // Sube y baja
          }}
          transition={{
            duration: 2, // Duración en segundos
            ease: "easeInOut",
            times: [0, 0.5, 1], // Define el tiempo de cada keyframe
            loop: Infinity, // Repite la animación indefinidamente
          }}
          className={`absolute w-[50px] top-[${top}px] left-[${left}px]`}
        >
          <img src={image} alt="icono flotante"/>
        </motion.div>
    </div>
  )
}

export default IconFloat