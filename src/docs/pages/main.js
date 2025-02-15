import '../style/style_pages/main.css';
import Signup from "../components/signup";
import Login from "../components/login";
import { useContext } from 'react';
import { Auth } from '../context/context';
import Logo from '../components/logo';

export default function Main() {
    const {sign} = useContext(Auth)
    return (
        <div className="mainPage">
            <div className="welocme">
                <div className="container">
                    <h2>welcome to</h2>
                    <Logo/>
                    <p>Start to make money with your experience here, go fast as a rocket and 
                        start now to your dream come true
                    </p>
                </div>
                <div className="policy-and-rules">
                    <button>policy and rules</button>
                    <div className="powerdLogo">
                        <span>powered by</span>
                        <i className="fa-brands fa-yahoo"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-solid fa-z"></i>
                    </div>
                </div>
            </div>
            {sign ?
            <Signup/>
            :
            <Login/>
            }
        </div>
    )
}