
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col justify-between contact w-full h-screen bg-bluePrimary'>

          <h5 className='text-skyClear text-[1.5rem] md:text-[3rem] px-5'>Contact me</h5>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 items-center' id='icon-container'>

            <div className="flex justify-center items-center ">
              <a href="https://www.linkedin.com/in/isaac-urdaneta-8450b2102/" target="_blank" rel="noreferrer" >
              <img className="w-[100px] rounded-lg" src={linkedin}  alt="img"/>
              </a>
            </div>

            <div className="flex justify-center items-center  ">
              <a href="mailto:urdanetacuarteisaacdavid@gmail.com" target="_blank" rel="noreferrer" >
              <img className="w-[100px] rounded-lg" src={gmail}  alt="img"/>
              </a>
            </div>

            <div className="flex justify-center items-center ">
              <a href="https://github.com/IducSoft" target="_blank" rel="noreferrer" >
              <img className="w-[100px] rounded-lg" src={github}  alt="img"/>
              </a>
            </div>
          </div>

        <Footer/>
     
    </div>
  )
}

export default Contact