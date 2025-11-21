import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export default function Context ({children}) {
    const [API, setAPI] = useState("");
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [clips,setClips] = useState({
        status: false,
        id: 0
    })

    // the api that uses to connect with server 
    useEffect(() => {
        // to ignore warning
        setAPI("")

        // start loading
        setLoading(true)
        const getData =  async () => {
        
        try {
                const res = await fetch ("http://localhost:5000/data", {
                    credentials: "include",
                    headers: {
                        "Content-Type":"application/json"
                    }
                });
                if(!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                
                const result = await res.json();
                setData(result);
                setLoading(false);
            }
            catch(err) {
                console.log(err);
            }
        }
        getData();
    }, [])

    const parent = {
        API,
        setClips,
        clips,
        data,
        loading
    }

    return <Auth.Provider value={parent}>{children}</Auth.Provider>
}