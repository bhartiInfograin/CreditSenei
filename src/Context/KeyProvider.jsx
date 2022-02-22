import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
const KeyContext = createContext();

export default function KeyProvider({ children }) {
    const [clientKey, setClientKey] = useState("cf2bc25b-5eaa-407e-9783-ae6498db4eb4");
    const [trackingToken,setTrackingToken] =useState();
  

    useEffect(() => {
        try{

            // const config = {
            //             headers: {
            //                 "Authorization" :"Basic Y3JlZGl0c2Vuc2VpOnRlbWlkZW50aW91cw=="
            //             },
            //         };

            const  data = axios.get('https://stage-sc.consumerdirect.com/api/signup/start?clientKey=cf2bc25b-5eaa-407e-9783-ae6498db4eb4')
            .then(resp => {
                // console.log("data",resp.data);
                // console.log("data");
                setTrackingToken(resp.data)
            })
            .catch(error => {
                   console.log("error",error)
            })

        }catch(error){
            console.log("error",error)
        }
    }, []);


  console.log("trackingToken",trackingToken)
    return (
        <KeyContext.Provider value={{ clientKey,trackingToken, }} >
            {children}
        </KeyContext.Provider>
    )
}


export const KeyState = () => {
    return useContext(KeyContext);
};






