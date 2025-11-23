import Logo from "./logo";
import NavBar from "./navbar";
import '../style/components/header.css'
import Search from "./search";
import { StrictMode, useContext, useEffect, useState } from "react";
import { Auth } from "../context/context";

export default function Header () {
    const { setNavBar, displayWidth,setDisplayWidth, navBar } = useContext(Auth);
    const [Yaxis, setYaxis] = useState(0);
    
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
            <div onClick={() => setNavBar(true)} className="nav">
                <div className={`line ${navBar ? "rot-1" : ""}`}></div>
                <div className={`line l${navBar ? "hide" : ""}`}></div>
                <div className={`line ${navBar ? "rot-3" : ""}`}></div>
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