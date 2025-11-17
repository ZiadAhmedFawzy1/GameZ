import '../style/components/nav.css'

export default function NavBar() {
    return (
        <div className="list">
            {/* display if resolution of mobile */}
            {/* <button><img src={require("../imgs/icons/menu.png")} width='30px' /></button> */}
            <ul>
                <li><a href='/'>store</a></li>
                <li><a href='/'>community</a></li>
                <li><a href='/'>categories</a></li>
                <li><a href='/'>support</a></li>
                <li><a href='/'>gifts</a></li>
            </ul>
        </div>
    )
}