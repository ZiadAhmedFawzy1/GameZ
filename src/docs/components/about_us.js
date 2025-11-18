import '../style/components/about_us.css';
export default function AboutUs() {
    return (
        <div className="about-us">
            <h2>Why Choose <span>GameZ</span></h2>
            <div className='box'>
                <div>
                    <img src={require("../imgs/icons/coding.png")} width='30' alt='1'/>
                    <h3>Support for Developers</h3>
                    <p>We give developers a place to publish their games, manage updates, and earn from their work through a simple and transparent system.</p>
                </div>
                <div>
                    <img src={require("../imgs/icons/money.png")} width='30' alt='2'/>
                    <h3>Ultra-Affordable Games</h3>
                    <p>Every game is priced at a symbolic amount so that anyone can enjoy high-quality titles without worrying about cost.</p>
                </div>
                <div>
                    <img src={require("../imgs/icons/cyber-security.png")} width='30' alt='3'/>
                    <h3>Quality & Safety</h3>
                    <p>All games are reviewed and tested to ensure smooth performance, stability, and a secure experience.</p>
                </div>
            </div>
        </div>
    )
}