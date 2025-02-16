import { useContext, useEffect, useState } from "react"
import { Auth } from "../context/context";
import Logo from "../components/logo";
import '../style/style_pages/work.css'
import { Link } from "react-router-dom";
import Category from '../JSON/jobs.json'

export default function Work() {
    const { session } = useContext(Auth);
    const [visibleNav,setVisibleNav] = useState(false);
    const [skills,setSkills] = useState([]);
    const [category,setCategory] = useState("Web Development")

    useEffect(() => {
        let allSkills = []
        Category.categories.filter((e) =>
        e.name === category)
        .map((e) =>
        e.jobs.map((e) =>
        e.skills.map((e) => allSkills.push(e))
        ))
        setSkills(allSkills);
    }, [category])
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
            <div className="control">
                <div className="filter">
                    <select onChange={(e) => setCategory(e.target.value)}>
                        {Category.categories.map((e) => 
                        <option value={e.name}>{e.name}</option>
                        )}
                    </select>
                    <select>
                        {skills.map((e) =>
                        <option>{e}</option>
                        )}
                    </select>
                    <div className="collect-skills">
                        
                    </div>
                </div>
            </div>
            <div className="table-control">
                <table>
                    <thead>
                        <tr>
                            <th>job title</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}