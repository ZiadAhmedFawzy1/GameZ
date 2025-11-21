import Logo from "./logo";
import '../style/components/footer.css';
import List from "./list";
import { useState } from "react";

export default function Footer () {
    const [mail,setMail] = useState("")
    return (
        <footer>
            <div className="head">
                <Logo size="50px"/>
                <h2>the best egyption platform of gaming</h2>
                <p>Our target is to have 5,000 games available this year. We aim to create the best, highest-quality games, and we support developers in turning their dreams into reality.</p>
                <button className="downloadBtn"><span>get free for windows</span> <img src={require("../imgs/icons/windows.png")} width='20' alt="windows"/></button>
            </div>
            <div className="lists">
                <List head="what is new?" list={["play live games","Do it Now","LIEV","master Good"]} />
                <List head="best games" list={["god of war","Legaue of Legends","assisant cread","valorent"]} />
                <List head="resouces" list={["pricing", "our blog", "newsletter"]} />
                <List head="support" list={["help center", "support community", "enterprise support"]} />
            </div>
            <hr/>
            <div className="footwear">
                <div className="word">
                    <p>get all the latest news, gameZ gmaes and highest quality games from here. <a rel="noreferrer" href="https://github.com/ZiadAhmedFawzy1" target="_blank">ziad fawzy</a> say directly to your inbox</p>
                    <div className="social">
                        <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="/"><i className="fa-brands fa-github"></i></a>
                        <a href="/"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="/"><i className="fa-brands fa-twitch"></i></a>
                    </div>
                </div>
                <div className="message">
                    <input onChange={(e) => setMail(e.target.value)} value={mail} type="text" placeholder="example@gmail.com" />
                    <button className={mail.includes("gmail.com") && "activeJoin"}>join</button>
                </div>
            </div>
        </footer>
    )
}