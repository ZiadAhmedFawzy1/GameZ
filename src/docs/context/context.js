import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export default function Context({children}) {
    const [API,setAPI] = useState("http://localhost:3001");
    const [sign,setSign] = useState(false);
    const [loadingCountry,setLoadingCountry] = useState(true)
    const [infosEmployee, setInfoEmployee] = useState({
        firstName:"",lastName: "",
        Email: "",phone: "",
        pass:"",rpass:"",
        country: "",
    })
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
    }
    return (
        <Auth.Provider value={parent}>{children}</Auth.Provider>
    )
}