import Logo from "./logo";
import '../style/components/footer.css';
import List from "./list";
import { useContext, useEffect, useState } from "react";
import { Auth } from "../context/context";

export default function Footer () {
    const {API, setVerify, verify} = useContext(Auth);
    
    const [mail,setMail] = useState({
        sender: "",
        message: "",
        loading: false,
    })
    const [message, setMessage] = useState("");
    const sendMaile = async () => {        
          
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.sender);
        if(!valid) {
            setMessage("invalid Email : example@gmail.com");
            return;
        }
        if(!mail.message) {
            setMessage("the message is empty");
        }
        // change status because the customer writes all inputs right.
        setMail((prev) => ({...prev, loading: true}));
        // reset message
        setMessage("");

        await fetch(`${API}/sendCode`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                client: mail.sender

            }),
            credentials: "include",
        }).then((res) => {
            if(!res.ok) {
                throw new Error("the message doesn't send");
            }
            else {
                setMail((prev) => ({...prev, loading: false}));
                setVerify((prev) => ({...prev, verifyBox: true}))
            }
            
        })

    }
    useEffect(() => {
        if(!verify.isverified) { 
            return;
        }
        const response = async () => {
            await fetch(`${API}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
            mail: {
                sender: mail.sender,
                message: mail.message
            }})
        }).then((res) => {
            if(res.ok) {
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        })
        } 
        response()
    }, [verify.isverified])
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
                    <h4>Get in Touch with the Developer</h4>
                    <div className="mail">
                        <input onChange={(e) => setMail((prev) => 
                            ({
                                ...prev,
                                sender: e.target.value
                            })
                        )} value={mail.sender} type="text" placeholder="example@gmail.com" />
                        
                        <textarea placeholder="text here..." onChange={(e) => setMail((prev) => 
                            ({
                                ...prev,
                                message: e.target.value
                            })
                        )} value={mail.message}></textarea>
                    </div>
                        <button disabled={mail.loading || !mail.sender || !mail.message} onClick={() => sendMaile()} className={mail.sender.includes("gmail.com") ? "activeJoin" : ""}>{mail.loading ? "loading...": "join"}</button>
                    <p style={{color: "red"}}>{message}</p>
                </div>
            </div>
        </footer>
    )
}