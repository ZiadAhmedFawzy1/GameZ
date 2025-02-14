import '../style/stlye_components/signup.css';
import { useContext, useEffect, useState } from 'react';
import { Auth } from "../context/context";
import VerifyEmail from './verifyEmail';
export default function Signup() {
    const { setSign, setInfoEmployee, infosEmployee, API } = useContext(Auth)
    const [ErrorMessage,setMessgeError] = useState("")
    const [nextPage,setNextPage] = useState(false)
    const [checkerPass,setCheckPass] = useState({
        gate1:false,
        gate2:false,
        gate3:false,
        gate4:false,
    })
    // function to get data of employee
    const HandleChange = (e) => {
        const {name,value} = e.target;
        setInfoEmployee((preData) => ({
            ...preData,
            [name]:value,
        }))
    }
    // check infos of Employee
    const HandleSign = (e) => {
        e.preventDefault();
        if(!infosEmployee.firstName || !infosEmployee.lastName || !infosEmployee.Email || !infosEmployee.phone || !infosEmployee.pass || !infosEmployee.rpass) {
            setMessgeError("please enter your all fields");
        }
        else {
            if(!infosEmployee.Email.includes("@gmail.com")) {
                setMessgeError("please enter a correct gmail: example@gmail.com");
            }
            else {
                if(infosEmployee.phone.length !== 11) {
                    setMessgeError("write your number without '+20' ex: (01201010101)");
                }
                else {
                    if(checkerPass.gate1 && checkerPass.gate2 && checkerPass.gate3 && checkerPass.gate4) {
                        fetch(`${API}/check-unique-mail`, {
                            method: "POST",
                            headers: {
                                "Content-Type":"application/json",
                            },
                            body: JSON.stringify({mail: infosEmployee.Email})
                        })
                        .then((res) => {
                            if(res.status === 200) {
                                setMessgeError("")
                                setNextPage(true)
                            }
                            else if(res.status === 404) {
                                setMessgeError("we have already located your Email found!");
                            }
                        })
                    }
                    else {
                        setMessgeError("please follow rules to make strong password");
                    }
                }
            }
        }
    }
    // check passwprd to make sure from security
    useEffect(()=>{
        if(infosEmployee.pass.length > 8) {
            setCheckPass((prevData) => ({
                ...prevData, 
                gate1: true 
            }))
        }
        else {
            setCheckPass((preData) => ({
                ...preData,
                gate1: false
            }))
        }
        if(/[A-Z]/.test(infosEmployee.pass)) {
            setCheckPass((prevData) => ({
                ...prevData, 
                gate3: true 
            }))
        }
        else {
            setCheckPass((preData) => ({
                ...preData,
                gate3: false
            }))
        }
        if(/[_\-@]/.test(infosEmployee.pass)) {
            setCheckPass((prevData) => ({
                ...prevData, 
                gate2: true 
            }))
        }
        else {
            setCheckPass((preData) => ({
                ...preData,
                gate2: false
            }))
        }
        if(infosEmployee.pass.length > 1 && infosEmployee.pass === infosEmployee.rpass) {
            setCheckPass((preData)=> ({
                ...preData,
                gate4: true
            }))
        }
        else {
            setCheckPass((preData)=> ({
                ...preData,
                gate4: false
            }))
        }
    },[infosEmployee.pass, infosEmployee.rpass])

    return (
        <>
        {nextPage ? 
        <VerifyEmail/>
        :
        <div className="signing">
            <div className="container">
                <h2>sign in grow here</h2>
                <form onSubmit={HandleSign}>
                    <div className="inp-name inp">
                        <div className="n-1">
                            <label>first name</label>
                            <input name='firstName' onChange={HandleChange} value={infosEmployee.firstName} type="text" placeholder="ex: ziad" />
                        </div>
                        <div className="n-2">
                            <label>last name</label>
                            <input name='lastName' onChange={HandleChange} value={infosEmployee.lastName} type="text" placeholder="ex: ahmed" />
                        </div>
                    </div>
                    <div className="inp-contact inp">
                        <div className="mail">
                            <label>email</label>
                            <input onChange={HandleChange} value={infosEmployee.Email} name='Email' type="text" placeholder="ex: example@gmail.com" />
                        </div>
                        <div className="phone">
                            <label>phone</label>
                            <input onChange={HandleChange} value={infosEmployee.phone} name='phone' type="text" placeholder="ex: +20 000 000 00" />
                        </div>
                    </div>
                    <div className="inp-password inp">
                        <div className="password">
                            <label>password</label>
                            <input onChange={HandleChange} value={infosEmployee.pass} name='pass' type="password" placeholder="enter strong password" />
                        </div>
                        <div className="repassword">
                            <label>confirm password</label>
                            <input onChange={HandleChange} value={infosEmployee.rpass} name='rpass' type="password" placeholder="check your password" />
                        </div>
                        <p style={{fontSize: "12px", margin: "10px 0"}} className='error'>{ErrorMessage}</p>
                        <div className='rules'>
                            <p>
                                <span className='checkIcon'>
                                    {checkerPass.gate1 ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
                                </span>
                                <span>at least 8 letters</span>
                                </p>
                            <p>
                                <span className='checkIcon'>
                                    {checkerPass.gate2 ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
                                </span>
                                <span>include symbols (_ , -, @)</span>
                            </p>
                            <p>
                                <span className='checkIcon'>
                                    {checkerPass.gate3 ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
                                </span>
                                <span>include uppercase (A - Z)</span>
                            </p>
                            <p>
                                <span className='checkIcon'>
                                    {checkerPass.gate4 ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>}
                                </span>
                                <span>confirm password</span>
                            </p>
                        </div>
                    </div>
                    <div className="action">
                        <button className="signBtn">sign</button>
                        <button onClick={()=>setSign(false)} className="loginBtn">log in</button>
                    </div>
                </form>
            </div>
        </div>
        }
        </>
    )
}