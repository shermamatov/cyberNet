import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "./Slider.css";
import "swiper/css/pagination";

// import "./home.css";
import "../Header/headerAdaptive.css";
// // import required modules
import { Autoplay } from "swiper";

import s1 from "../../image/s1.webp";
import s2 from "../../image/s16.webp";
import s3 from "../../image/s3.webp";
import s4 from "../../image/s4.webp";
import s5 from "../../image/s15.webp";
import s6 from "../../image/s6.webp";
import s7 from "../../image/s7.webp";
import s8 from "../../image/s8.webp";
import s9 from "../../image/s9.webp";
import s10 from "../../image/s10.webp";

export default function App() {
    return (
        <>
            <div className="slider">
                <Swiper
                    slidesPerView={4}
                    grabCursor={true}
                    // spaceBetween={30}
                    // centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s6} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s7} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s8} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s9} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s10} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={3}
                    grabCursor={true}
                    // spaceBetween={30}
                    // centeredSlides={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="tre"
                    style={{ display: "none" }}
                >
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s6} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s7} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s8} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img sl">
                            <img src={s9} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider_img">
                            <img src={s10} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s1} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s2} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s3} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s4} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s5} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s6} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s7} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s8} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img dva">
                    <img src={s9} alt="" />
                </div>
                <div style={{ display: "none" }} className="slider_img sl dva">
                    <img src={s10} alt="" />
                </div>
            </div>
        </>
    );
}
