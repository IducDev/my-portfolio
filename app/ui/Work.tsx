"use client"
import {useState } from 'react'
import Deploys from './subComponents/Deploys';
import Repositories from './subComponents/Repositories';

const Work = () => {
    const [renderDeploys, setRenderDeploys] = useState(true);
    return (
    <div id='work' className='w-full h-auto bg-bluePrimary p-5 '>
        <h2 className='text-skyClear text-[1.5rem] md:text-[3rem] mb-8'>Projects</h2>
        <ul className="mt-5 flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li className="me-2">
                <button onClick={()=>{setRenderDeploys(true)}}  className={`inline-block p-4 rounded-t-lg text-xl ${renderDeploys && "active"}`}>Deploys</button>
            </li>
            <li className="me-2">
                <button onClick={()=>{setRenderDeploys(false)}}  className={`inline-block p-4 rounded-t-lg text-xl ${!renderDeploys && "active"}`}>Repositories</button>
            </li>
        </ul>
            {
                renderDeploys && <Deploys/>
            }
            {
                renderDeploys === false && <Repositories/>
            }
    </div>
    )
}

export default Work;