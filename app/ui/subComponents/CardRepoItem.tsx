import repository from "../../../public/carpeta.png";
import linkToSite from "../../../public/cadena.png";
import ojo from "../../../public/ojo.png";
import estrella from "../../../public/estrella.png";
import tenedor from "../../../public/tenedor.png";
import Image from "next/image";



const CardRepoItem = ({repo}:{repo:any}) => {
    return (
        <div className="h-[100%]  border border-gray-200 rounded-lg shadow bg-blueSecondary">
            <div className="p-5 h-[100%] flex flex-col justify-between">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {repo.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {repo.description}
                    </p>
                </div>
                <div className='w-full  text-white rounded-lg px-2 py-1 my-3'>
                    <div className='my-1'>
                        <h6 className='flex align-center'>
                            <Image src={ojo} alt='repository' className='w-[1.5rem] ml-2' />
                            <span className=' ml-2'>Watchers: {repo.watchers}</span>
                        </h6>
                    </div>
                    <div className='my-1' > 
                        <h6 className='flex align-center'>
                            <Image src={estrella} alt='estrella' className='w-[1.5rem] ml-2' />
                            <span className=' ml-2'>stars: {repo.stargazers_count}</span>
                        </h6>
                    </div>

                    <div className='my-1'>
                        <h6 className='flex align-center'>
                            <Image src={tenedor} alt='tenedor' className='w-[1.5rem] ml-2' />
                            <span className=' ml-2'>forks: {repo.stargazers_count}</span>
                        </h6>
                    </div>
                </div>
                
                <div className='w-[100%] flex justify-between align-bottom'>
                    <a href={repo.html_url} target='_blank' rel='noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-skyClear rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Repository
                        <Image src={repository} alt='repository' className='w-[1.5rem] ml-2' />
                    </a>

                    <a href={repo.homepage} target='_blank' rel='noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Link
                        <Image src={linkToSite} alt='link' className='w-[1.5rem] ml-2' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardRepoItem;