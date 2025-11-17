import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export default function Context ({children}) {
    const [API, setAPI] = useState("");
    const [clips,setClips] = useState({
        status: false,
        id: 0
    })

    // the api that uses to connect with server 
    useEffect(() => {
        setAPI("");
    }, [])

    const parent = {
        API,
        setClips,
        clips
    }

    return <Auth.Provider value={parent}>{children}</Auth.Provider>
}