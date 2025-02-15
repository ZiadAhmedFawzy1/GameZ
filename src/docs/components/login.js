import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../context/context";

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [messageError, setMessageError] = useState("")
    const {setSign, API} = useContext(Auth)
    const HandleLogin = (e) => {
        e.preventDefault();
        if(!email || !password) {
            setMessageError("please enter your all fields");
        }
        else 
        {
            if(!email.includes("@gmail.com")) {
                setMessageError("your email must include @gmail.com")
            }
            else {
                fetch(`${API}/Login`, {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({mail:email,pass: password})
                })
                .then((res) => {
                    if(res.status === 200) {

                    }
                })
                setMessageError("")
            }
        }
    }
    return (
        <div className="login">
            <div className="container">
                <h2>login in grow here</h2>
                <form onSubmit={HandleLogin}>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} type="text" placeholder="enter your email" />
                    <p style={{fontSize: "12px"}} className="error">{messageError}</p>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="enter your password" />
                    <Link className="forgot-pass">are you forgot password?</Link>
                    <button>log in</button>
                    <button onClick={() => setSign(true)} className="sign" to='/sign'>sign</button>
                </form>
            </div>
        </div>
    )
}