import Logo from "./logo";
import NavBar from "./navbar";
import '../style/components/header.css'
import Search from "./search";

export default function Header () {
    return (
        <header>
            <Logo />
            <NavBar/>
            <Search/>
        </header>
    )
}