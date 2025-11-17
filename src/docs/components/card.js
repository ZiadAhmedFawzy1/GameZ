import { useContext } from 'react'
import '../style/components/card.css'
import Logo from './logo'
import { Auth } from '../context/context'
import CardBtn from './cardBtn';
export default function Card(porps) {
    const {setClips} = useContext(Auth);
    const DetailsOption = () => {
        setClips(prev => ({
            ...prev,
            id: porps.id,
            status: true,
        }))
    }
    return (
        <div className="card">
            {porps.img ? 
            <div onClick={() => DetailsOption()} style={{backgroundImage: `url(${porps.img})`}} className="bg-gm"></div>
            :
            <div className="bg-gm">
                <Logo/>
            </div>
            }
            <h4>{porps.title}</h4>
            <p>{porps.desc || ""}</p>
            <h5 className='download'><i className="fa-solid fa-download"></i> {porps.download || 0}</h5>
            <CardBtn />
        </div>
    )
}