import { Routes, Route } from "react-router-dom";
import Main from "./docs/pages/main";
import './docs/style/App.css';
import Header from "./docs/components/header";
import Footer from "./docs/components/footer";

export default function App () {
    return (
        <div className="app">
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