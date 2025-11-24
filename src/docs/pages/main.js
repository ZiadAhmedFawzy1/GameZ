import '../style/pages/main.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "../components/card";
import { useContext, useEffect, useState } from "react";
import { Auth } from "../context/context";
import Details from "../components/details";
import AboutUs from "../components/about_us";
import Store from "../components/store";
import VerifyBox from '../components/VerifyBox';
export default function Main() {
    const {clips, data, loading, verify, displayWidth} = useContext(Auth);
    const [previewSlide, setPreviewSlide] = useState(null)
    const [idImg,setIdImg] = useState(1);
    
    // to transfer between photos
    useEffect(() => {
        setIdImg(data[0]?.id);
    }, [loading]);
    

    useEffect(() => {
    const getPreview = async () => {
        // const preview = await displayWidth > 809 ?  setPreviewSlide(3) : setPreviewSlide(2);
        // return preview;
        if(displayWidth >= 809) {
            setPreviewSlide(3)
        }
        else if (displayWidth < 809 && displayWidth >= 550) {
            setPreviewSlide(2)
        }
        else if(displayWidth < 550 && displayWidth >= 460) {
            setPreviewSlide(3)
        }
        else {
            setPreviewSlide(2)
        }
    }
    getPreview();
    },[displayWidth, previewSlide])

    return (
        <div>
            {verify.verifyBox &&
                <VerifyBox />
            }
            {clips.status && 
                data.filter(e => e.id === clips.id).map((e,i) => 
                    <Details
                    key={i}
                    name={e.title} 
                    desc={e.description} 
                    img={e.image} 
                    rate={5.0} 
                    price={e.worth.replace("$", " EGP ")}
                    discount={e.discount}
                    download={e.users}
                    url={e.open_giveaway_url}
                    />
                )
            }
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
                modules={[Pagination]}
                navigation
                loop={true}
                spaceBetween={35}
                // to decide how many slide display on monitor depending on width of browser
                slidesPerView={previewSlide}
                className="mySwiper"
            >
                {data.map((e,i) => 
                    <SwiperSlide key={i}>
                        <Card id={e.id}  img={e.image} title={e.title} desc={e.description} download={e.user}/>
                    </SwiperSlide>
                    )}
                    </Swiper>
                </div>
            </div>
            {/* NG -> new games */}
            <div className="section NGs">
                <h3>New games</h3>
                    <div className="NGs-container">
                    <div
                        className="display"
                        style={{
                            backgroundImage: `url(${data.find(e => e.id === idImg)?.image || ''})`
                        }}
                        ></div>
                    <ul>
                        {data.map((e,i) => 
                        <li className={e.id === idImg ? "active" : ""} onClick={() => setIdImg(e.id)} key={i}>{e.title}</li>
                        )}
                    </ul>
                </div>
            </div>
            <AboutUs />
            <Store/>
        </div>
    )
}