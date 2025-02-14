import { useContext, useEffect, useState } from "react"
import { Auth } from "../context/context"
import '../style/stlye_components/verify.css'
import ReactInputVerificationCode from 'react-input-verification-code';

export default function VerifyEmail() {
    const {infosEmployee, API} = useContext(Auth);
    const [otp,setOtp] = useState("")
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState("")
    const [verifed,setVerifed] = useState(false)
    useEffect(()=>{
        fetch(`${API}/sendCode`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                mail: infosEmployee.Email
            })
        })
    },[])

    useEffect(()=>{
        if(otp.length === 6) {
            setLoading(true) 
            fetch(`${API}/verifyEmail`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    otp: otp,
                    data: infosEmployee
                })
            }).then((res)=> {
                if(res.ok) {
                    setVerifed(true)
                    setInterval(()=>{
                        window.location.reload();
                    },3000)
                }
                else {
                    setMessage("your verify code is wrong please visit your email to verification.")
                }
                setLoading(false);
            })
        }
    },[otp])
    console.log(loading)
    return (
        <div className="verify">
            {loading ?
            <div className="loading">
                <i class="fa-solid fa-spinner fa-spin"></i>
            </div>
            :null
            }
            {verifed ? 
            <div className="success-verification">
                <img src={require("../imgs/icons/security.png")} alt="verifed" />
                <h3>your verification was done</h3>
            </div>
            :
            <div className="verfiy-header">
                <h2>welcome master {infosEmployee.firstName}</h2>
                <h3>please vefiy your Email <i className="fa-regular fa-envelope"></i></h3>
                <p>we are send code on your email which choosed it</p>
                <p>{infosEmployee.Email}</p>
                <p style={{fontSize: "12px"}} className="error">{message}</p>
                <div className="verifycode">
                    <ReactInputVerificationCode placeholder="" onChange={(value) => setOtp(value)} value={otp} autoFocus={true} length={6} passwordMask={"*"} type="password" />
                </div>
            </div>
            }
        </div>
    )
}