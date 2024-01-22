import { dataDeploys } from "../../data/data"
import linkToSite from "../../assets/cadena.png";
//const accessToken = 'nfp_eG4GmLmRQuXzoh4SGNr6N5Qw3doQiPPcd5ab';
const Deploys = () => {
    
    
    return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10">
        {
            dataDeploys.map((index, key)=>{
                return (
                    <div key={key}>
                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div >
                                <img className="rounded-t-lg w-full" src={index.image} alt="" />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{index.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {index.fromDeploy}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {index.date}
                                </p>
                                <a href={index.url} target='_blank' rel='noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Link
                                    <img src={linkToSite} alt='link' className='w-[1.5rem] ml-2' />
                                </a>
                            </div>
                        </div>
                    </div>
                )
                
            })
        }

        

    </div>
  )
}

export default Deploys