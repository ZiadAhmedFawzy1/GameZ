import Logo from "./logo";
import '../style/components/footer.css';

export default function Footer () {
    return (
        <footer>
            <div className="head">
                <Logo/>
                <h2>the best egyption platform of gaming</h2>
                <p>Our target is to have 5,000 games available this year. We aim to create the best, highest-quality games, and we support developers in turning their dreams into reality.</p>
                <button><span>get free for windows</span> <img src={require("../imgs/icons/windows.png")} width='20' alt="windows"/></button>
            </div>
        </footer>
    )
}