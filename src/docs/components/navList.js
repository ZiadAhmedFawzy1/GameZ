import NavBar from "./navbar";
import '../style/components/nav_list.css';
import Social from "./social";

export default function NavList () {
    return (
        <div className="navList">
            <button></button>
            <br/>
            <h3 className="logo">Z</h3>
            <h4>GameZ is biggest platform of games</h4>
            <Social />
            <NavBar />
            <div className="footer">
                <a href="/">policy of gamez</a>
            </div>
        </div>
    )
}