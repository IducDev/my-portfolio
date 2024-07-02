
import linkedin from "../../public/linkedin.png";
import gmail from "../../public/gmail.png";
import github from "../../public/github.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div id='contact' className='flex flex-col justify-between contact w-full h-screen bg-bluePrimary'>
          <h5 className='text-skyClear text-[1.5rem] md:text-[3rem] px-5'>Contact me</h5>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 items-center' id='icon-container'>
            <div className="flex justify-center items-center ">
              <Link href="https://www.linkedin.com/in/isaac-urdaneta" target="_blank" rel="noreferrer" >
              <Image className="w-[100px] rounded-lg" src={linkedin}  alt="img"/>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link href="mailto:urdanetacuarteisaacdavid@gmail.com" target="_blank" rel="noreferrer" >
                <Image className="w-[100px] rounded-lg" src={gmail}  alt="img"/>
              </Link>
            </div>
            <div className="flex justify-center items-center ">
              <Link href="https://github.com/iducdev" target="_blank" rel="noreferrer" >
                <Image className="w-[100px] rounded-lg" src={github}  alt="img"/>
              </Link>
            </div>
          </div>
        <Footer/>
    </div>
  )
}
export default Contact;