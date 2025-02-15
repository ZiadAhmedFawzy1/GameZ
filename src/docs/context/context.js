import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export default function Context({children}) {
    const [API,setAPI] = useState("http://localhost:3001");
    const [sign,setSign] = useState(false);
    const [loadingCountry,setLoadingCountry] = useState(true)
    const [session,setSession] = useState([]);
    const [sessionLoading,setSessionLoading] = useState(true);
    const [infosEmployee, setInfoEmployee] = useState({
        firstName:"",lastName: "",
        Email: "",phone: "",
        pass:"",rpass:"",
        country: "",
    })

    useEffect(() => {
        fetch(`${API}/isLogin`, {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
            },
            credentials: "include"
        })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            setSession(result.data);
            setSessionLoading(false)
        })
        .catch((err) => {
            throw new Error("you have internal server error =>", err)
        })
    }, [])

    // put loading state for stop loading after get country
    useEffect(() => {
        fetch("http://ip-api.com/json/?fields=61439")
        .then((res) => {
            setLoadingCountry(false)
            return res.json()
        })
        .then((result) => setInfoEmployee((preData) => ({
            ...preData,
            country: result.country
        })))
    }, [loadingCountry])
    const parent = {
        API,setAPI,
        sign,setSign,
        infosEmployee, setInfoEmployee,
        session,setSession,
        sessionLoading
    }
    return (
        <Auth.Provider value={parent}>{children}</Auth.Provider>
    )
}