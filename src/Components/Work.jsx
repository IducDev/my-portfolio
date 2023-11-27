// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { useEffect, useState } from 'react'
import CardRepoItem from './subComponents/CardRepoItem';

const Work = () => {

    const [repoResult, setReporesult] = useState(false);
    const [repoList, setRepoList] = useState([])

    async function getRepoInfo(owner) {
        try {
            const response = await axios.get(`https://api.github.com/users/${owner}/repos`);
            
            setReporesult(!repoResult)
            setRepoList([...response.data])
            
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    useEffect(()=>{
        getRepoInfo("IducSoft")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    
    
    return (
    <div id='work' className='w-full h-auto bg-bluePrimary p-5 '>
        <h2 className='text-skyClear text-[1.5rem] md:text-[3rem] mb-8'>Projects</h2>
            {
                repoResult === true && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10">
                    {
                        repoList.map((index)=>{
                            return (
                                <div key={index.id}>
                                    <CardRepoItem repo={index} />
                                </div>
                            )
                            
                        })
                    }
                </div>
            )
        }
        
    </div>
    )
}

export default Work