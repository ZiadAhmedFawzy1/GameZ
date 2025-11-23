import '../style/components/details.css'
import { useContext, useEffect, useState } from 'react'
import { Auth } from "../context/context";

export default function VerifyBox () {
    const {verify, setVerify, API} = useContext(Auth);
    const [message, setMessage] = useState("")
    const [statusBox,setStatusBox] = useState("");
            // this is timer to add class for make animation scalling
            useEffect(()=>{
                const timer = setTimeout(() => {
                    setStatusBox("show");
                }, 600);
                return () => clearTimeout(timer);
            },[])
            
            const sendCode = async () => {
                if(verify.code.length !== 6) {
                    setMessage("the code invalid");
                    return;
                }
                setMessage("");
                await fetch(`${API}/verify`, {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({code: verify.code})
                }).then((res) => {
                    if(res.ok) {
                        setVerify((prev) => ({...prev, isverified: true}))
                    }
                    else {
                        setMessage("the code is wrong");
                    }
                })
            }
    return (
        <div className="containerDetails">
            <div className={`detailsBox ${statusBox} boxVerify`}>
                {verify.isverified ? 
                <div className='verifiedMail'>
                  <img src={require("../imgs/icons/verified-unscreen.gif")} />
                  <h4>verified successfully!</h4>
                </div>
                :
                <div className="description">
                    <h3>Verify code here (OTP)</h3>
                    <p>I sent code to email; please verify the mail, please</p>
                    <br/>
                    <div className='input-verify'>
                        <div className='inp-verify'>
                            <input onKeyDown={(e) => {
                                if(!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                                    e.preventDefault()
                                }
                            }} 
                            onChange={(e) => setVerify((prev) => ({...prev, code: e.target.value}))}
                            value={verify.code} maxLength={6} type='text' placeholder='X X X X X X' />
                        </div>
                        <p style={{color: "red"}}>{message}</p>
                        <button onClick={() => sendCode()}>verify now</button>
                    </div>                    
                </div>
                }
            </div>
        </div>
    )
}