import { Link } from 'react-router-dom'
import '../style/components/details.css'
import CardBtn from './cardBtn'
import { useContext, useEffect, useState } from 'react'
import { Auth } from "../context/context";

export default function Details (props) {
    const {setClips} = useContext(Auth);
    const [statusBox,setStatusBox] = useState("");
            // this is timer to add class for make animation scalling
            useEffect(()=>{
                const timer = setTimeout(() => {
                    setStatusBox("show");
                }, 600);
                return () => clearTimeout(timer);
            },[])
            
            // function to hide the box
            const CloseDetails = () => {
                setClips((prev) => ({
                    ...prev,
                    id: 0,
                    status: false
                }))
            }
    return (
        <div className="containerDetails">
            <div className={`detailsBox ${statusBox}`}>
                <button onClick={() => CloseDetails()} className='closebtn'>X</button>
                <div style={{backgroundImage: `url(${props.img})`}} className="image"></div>
                <div className="description">
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                    <span><i className="fa-solid fa-star"></i> {props.rate}</span>
                    <span><i className="fa-solid fa-download"></i> {props.download}</span>
                    <p>{props.price} EGP<span style={{textDecorationLine:"line-through"}}>{props.discount <= 0 || props.discount >= props.price ? "" : props.discount + props.price + "EGP"}</span></p>
                    <CardBtn name={"btnCart"} />
                </div>
                <Link to={'/download'}><img src={require("../imgs/icons/next.png")} width='20' alt='next'/> more details</Link>
            </div>
        </div>
    )
}