import { Routes, Route } from "react-router-dom";
import Main from "./docs/pages/main";
import './docs/style/app.css';

export default function App () {
    return (
        <div className="app">
            <div className="animatedShapes">
                <div className="shape1"></div>
                <div className="shape2"></div>
                <div className="shape3"></div>
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    )
}