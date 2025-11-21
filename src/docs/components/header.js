import Logo from "./logo";
import NavBar from "./navbar";
import '../style/components/header.css'
import Search from "./search";
import { useEffect, useState } from "react";

export default function Header () {
    const [Yaxis, setYaxis] = useState(0);
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
            <NavBar/>
            <Search/>
        </header>
    )
}