import { Routes, Route } from "react-router-dom";
import Main from "./docs/pages/main";
import './docs/style/App.css';
import Header from "./docs/components/header";
import Footer from "./docs/components/footer";
import { useContext } from "react";
import { Auth } from "./docs/context/context";
import Logo from "./docs/components/logo";

export default function App () {
    const { loading } = useContext(Auth);
    return (
        <div className="app">
            {loading && 
            <div className="loading">
                <div className="box">
                    <div className="circleLoad">
                        <Logo/>
                    </div>
                </div>
            </div>
            }
            <div className="animatedShapes">
                <div className="shape1"></div>
                <div className="shape2"></div>
                <div className="shape3"></div>
            </div>
            <Header/>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
        </div>
    )
}