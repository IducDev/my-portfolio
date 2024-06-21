import Image from "next/image";
import Atomo from "../../public/atomo.png"
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-blueSecondary shadow ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="https://github.com/iducdev" target='_blank' rel='noreferrer' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image width={50} height={50} src={Atomo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Isaac Urdaneta</span>
                    </Link>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/iducdev" target='_blank' rel='noreferrer' className="hover:underline">IducDev™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
export default Footer;