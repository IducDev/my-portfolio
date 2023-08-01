import React from 'react'
import {motion} from "framer-motion"
// eslint-disable-next-line react/prop-types
const IconFloat = ({image, scale, rotate, translateX, translateY}) => {

  return (
    <div>
        <motion.div
          animate={{
            x: translateX,
            y: -translateY,
            scale: scale,
            rotate: rotate,
          }}
          className='absolute w-[50px] top-[130px] left-[150px]'
        >
          <img src={image} alt="icono flotante"   />
        </motion.div>
    </div>
  )
}

export default IconFloat