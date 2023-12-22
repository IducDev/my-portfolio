
import axios from "axios"
import { useEffect } from "react";


// Replace 'YOUR_NETLIFY_API_TOKEN' with your actual Netlify API token


// Call the function and log the result


//const accessToken = 'nfp_eG4GmLmRQuXzoh4SGNr6N5Qw3doQiPPcd5ab';
const Deploys = () => {
    

    const netlifyApiToken = 'nfp_eG4GmLmRQuXzoh4SGNr6N5Qw3doQiPPcd5ab';

    async function getNetlifyDeploys() {
        try {
            const response = await fetch('https://api.netlify.com/api/v1/deploys', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${netlifyApiToken}`,
            },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch deploys: ${response.statusText}`);
            }

            const deploys = await response.json();
            return deploys;
        } catch (error) {
            console.error('Error fetching deploys:', error.message);
            return null;
        }
    }



    useEffect(()=>{
        getNetlifyDeploys().then((deploys) => {
            if (deploys) {
                console.log('Netlify Deploys:', deploys);
            }
        });
    }, [])
  return (
    <div>Deploys</div>
  )
}

export default Deploys