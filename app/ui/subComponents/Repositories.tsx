"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import CardRepoItem from "./CardRepoItem";
import SkeletonRepositories from "./SkeletonRepositories";

const Repositories = () => {
    const [repoResult, setReporesult] = useState(false);
    const [repoList, setRepoList] = useState<any>([]);
    async function getRepoInfo() {
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const response = await axios.get(`https://api.github.com/users/iducdev/repos`);
            setReporesult(!repoResult)
            setRepoList([...response.data])
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    useEffect(()=>{
        getRepoInfo();
     //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
    <div>
        {
        repoResult === true ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10">
                    {
                        repoList.map((index:any)=>{
                            return (
                                <div key={index.id}>
                                    <CardRepoItem repo={index} />
                                </div>
                            )
                            
                        })
                    }
            </div>
            ) : (<SkeletonRepositories/>)
        }
        </div>
    
    
  )
}
export default Repositories;