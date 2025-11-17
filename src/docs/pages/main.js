import Header from "../components/header";
import '../style/pages/main.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "../components/card";
import Data from '../api/data.json';
import { useContext } from "react";
import { Auth } from "../context/context";
import Details from "../components/details";
export default function Main() {
    const {clips} = useContext(Auth);
    return (
        <div>
            {clips.status && 
                Data.filter(e => e.id === clips.id).map((e,i) => 
                    <Details
                    key={i}
                    name={e.name} 
                    desc={e.desc} 
                    img={require(`../imgs/bg/${e.img}`)} 
                    rate={e.rate} 
                    price={e.price}
                    discount={e.discount}
                    download={e.downloads}
                    />
                )
            }
            <Header/>
            <div className="welcome">
                <div className="content">
                <h2>hollow knight</h2>
                <p>In the forgotten kingdom of Hollownest, where ancient tunnels twist beneath the earth, a small, silent Knight wandered alone. Its armor was cracked, its memories faint, but its heart—whatever shape it had—was steady.</p>
                <div className="price-content">
                    <button className="buys">buy now</button>
                    <div className="buys price">20 EGP</div>
                </div>
                </div>
            </div>
            <div className="section">
                <h3>recommended & best</h3>
                <div className="container">
                    <Swiper
                modules={[Navigation, Pagination]}
                navigation
                loop={true}
                spaceBetween={35}
                slidesPerView={3}
                className="mySwiper"
            >
                {Data.map((e,i) => 
                    <SwiperSlide key={i}>
                        <Card id={e.id}  img={require(`../imgs/bg/${e.img}`)} title={e.name} desc={e.desc} download={e.downloads}/>
                    </SwiperSlide>
                    )}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}