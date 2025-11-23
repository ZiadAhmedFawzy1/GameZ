import Logo from "./logo";
import NavBar from "./navbar";
import '../style/components/header.css'
import Search from "./search";
import { StrictMode, useEffect, useState } from "react";

export default function Header () {
    const [Yaxis, setYaxis] = useState(0);
    const [displayWidth,setDisplayWidth] = useState(0)
    const [navIcon,setNavIcon] = useState(false)
    

    useEffect(() => {
        const size = () =>{
            setDisplayWidth(window.innerWidth);
        } 
        window.addEventListener("resize", size);
        
        return () => {
            window.removeEventListener(size);
        }
    },[])

    useEffect(() => {
        if(displayWidth < 700) {
            setNavIcon(true);
        }
        else {
            setNavIcon(false);
        }
    },[displayWidth])

    useEffect(() => {
        const handleScrollY = () => {
            setYaxis(Math.floor(window.scrollY));
        }
        window.addEventListener("scroll", handleScrollY);
        
        return () => {
            window.removeEventListener("scroll", handleScrollY)
        };
    }, [])
    
    return (
        <header className={Yaxis > 100 ? "sticky-header" : "static-header"}>
            <Logo />
            {navIcon ? 
            <div className="nav">
                <div className="line li-1"></div>
                <div className="line li-2"></div>
                <div className="line li-3"></div>
            </div>
            :
            <StrictMode>
                <NavBar/>
                <Search/>
            </StrictMode>
            }
        </header>
    )
}