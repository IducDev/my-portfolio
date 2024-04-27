import Atomo from "../assets/atomo.png"
//import Deploys from "./subComponents/Deploys";

const Footer = () => {
    return (
        <footer className="bg-blueSecondary shadow ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://github.com/IducSoft" target='_blank' rel='noreferrer' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Atomo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Isaac Urdaneta</span>
                    </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/IducSoft" target='_blank' rel='noreferrer' className="hover:underline">IducSoft™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}



export default Footer;