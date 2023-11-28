import React from 'react';
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col justify-between contact w-full h-screen bg-bluePrimary px-5 py-5'>

          <h5 className='text-skyClear text-[1.5rem] md:text-[3rem] '>Contact me</h5>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 items-center' id='icon-container'>

            <div className="flex justify-center items-center transition-transform duration-300 transform-gpu hover:scale-50">
              <img className="w-[100px] rounded-lg" src={linkedin}  alt="img"/>
            </div>

            <div className="flex justify-center items-center  transition-transform duration-300 transform-gpu hover:scale-50">
              <img className="w-[100px] rounded-lg" src={gmail}  alt="img"/>
            </div>

            <div className="flex justify-center items-center transition-transform duration-300 transform-gpu hover:scale-50">
              <img className="w-[100px] rounded-lg" src={github}  alt="img"/>
            </div>
          </div>

          <h5 className='w-full py-3 bg-skySecondary text-center'> Isaac Urdaneta - 2022-2023 </h5>
      
    </div>
  )
}

export default Contact