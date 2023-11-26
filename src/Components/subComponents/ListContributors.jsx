import React, {useEffect, useState} from 'react';
import contributors from "../../assets/business-people.png";
import axios from "axios";


const ListContributors = ({contributorsLink}) =>{

    const [repoResult, setReporesult] = useState(false);
    const [repoListContributors, setRepoListContributors] = useState([])
    
    async function getRepoInfo(contributors) {
        try {
            const response = await axios.get(contributors);
            
            console.log(response.data)
            
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    useEffect(()=>{
        getRepoInfo(contributorsLink)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(

        <div className='my-1'>
            <h6 className='flex align-center'>
                <img src={contributors} alt='contributors' className='w-[1.5rem] ml-2' />
                <span className=' ml-2'>Contributors: 0</span>
            </h6>
        </div>
        
    )
}

export default ListContributors;