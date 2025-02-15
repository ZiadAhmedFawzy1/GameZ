import { useContext, useState } from "react"
import { Auth } from "../context/context";
import Logo from "../components/logo";
import '../style/style_pages/work.css'
import { Link } from "react-router-dom";

export default function Work() {
    const { session } = useContext(Auth);
    const [visibleNav,setVisibleNav] = useState(false);
    console.log(session);
    return (
        <div className="work">
            <header>
                <div className="logo"><Logo size="20px"/></div>
                <div className="info">
                    <div style={{backgroundImage: `url(${session.urlImg || require("../imgs/photos/default.jpg")})`}} className="porfileImg"></div>
                    {visibleNav ? 
                    <button className="close" onClick={()=> setVisibleNav(false)}>{session.full_name.split(" ")[0]}</button>
                    :
                    <button className="open" onClick={()=> setVisibleNav(true)}>{session.full_name.split(" ")[0]}</button>
                    }
                </div>
                {visibleNav &&
                <ul className="options">
                    <div className="header-option">
                        <div className="logo"><i className="fa-solid fa-seedling"></i></div>
                        <h3>{session.full_name}</h3>
                        <div className="username">{session.username}</div>
                        {!session.activate && 
                            <div className="activeationMessage">
                                <p><i class="fa-solid fa-triangle-exclamation"></i> Your account isn't activated</p>
                            </div>
                        }
                    </div>
                    <li><Link to='/profile'><i className="fa-solid fa-address-card"></i>profile</Link></li>
                    <li><Link to='/settings'><i className="fa-solid fa-gear"></i>settings</Link></li>
                    <li><Link to='/support'><i className="fa-solid fa-headset"></i>support</Link></li>
                    <li><button><i className="fa-solid fa-right-from-bracket"></i>log out</button></li>
                </ul>
                }
            </header>
            <div className="works">
                <h1>this is steam page</h1>
            </div>
        </div>
    )
}