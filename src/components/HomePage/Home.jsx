import React, { useEffect, useRef, useState } from "react";
import "../Header/header.css";
import banner from "../../image/banner.webp";
import "../Footer/footer.css";
import "../Header/headerAdaptive.css";
import "./home.css";
import art from "../../image/art.webp";
import artAdap from "../../image/AI_adap.jpg";
import about from "../../image/s13.webp";
import Slider from "./Slider";
import Header from "../Header/Header";
import { prodArr, prodArr2 } from "../../consts";
import { useNavigate } from "react-router-dom";
import aboutUsImg from "../../image/aboutas.webp";
import NET from "vanta/dist/vanta.net.min";
import BurgerMenu from "../Header/BurgerMenu";
import UpNavbar from "../Header/UpNavbar/UpNavbar";
import UsAi from "../../image/UsAI.png";
import UsAi_img1 from "../../image/UsAi_img1.png";
import UsAi_img2 from "../../image/UsAi_img2.png";
import z from "../../image/z.png";
import zfour from "../../image/4z.png";
import chel from "../../image/chel.png";
import "./homeCard.css";
import ChelModal from "./chel/ChelModal";
import { useTranslation } from "react-i18next";
import { useChel } from "../../contexts/ChelContext";
const Home = (props) => {
    const { t } = useTranslation();
    const [cardState, setCardState] = useState(false);
    const [privacy, setPrivacy] = useState(true);
    const navigate = useNavigate();
    const [menuState, setMenuState] = useState(false);
    const [chelModalState, setChelModalState] = useState(false);
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    const {
        checked1,
        setCheked1,
        checked2,
        setCheked2,
        border,
        checked3,
        upFontSize,
        checked4,
    } = useChel();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPrivacy(false);
        }, 10000);

        // Очистка таймера, если компонент размонтируется или состояние изменится
        return () => clearTimeout(timerId);
    }, []);
    const [visited, setVisited] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("visited")) {
            setVisited(true);
        } else {
            localStorage.setItem("visited", true);
        }
    }, []);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 300.0,
                    minWidth: 200.0,
                    // zoom: 1.7,
                    scale: 1,
                    scaleMobile: 1.0,
                    color: "#4AA2B8",
                    backgroundColor: "#034A82",
                    simulateTouch: true,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    useEffect(() => {
        // checked1 ? filterEst() : filterNet();
        border();
    }, [checked2]);
    useEffect(() => {
        // upFontSize(
        //     " calc(14px + (22 - 14) * ((100vw - 350px) / (1400 - 350)))",
        //     "headTitle",
        //     50
        // );
        // upFontSize(28, "headDesc", 24);7
    }, [checked3]);
    return (
        <div
            className={
                checked4
                    ? "container4"
                    : checked3
                    ? "container3"
                    : checked1
                    ? "container2"
                    : "container"
            }
            onClick={() => setMenuState(false)}
        >
            {menuState && (
                <div
                    className="sidebarMenu"
                    onClick={(e) => e.stopPropagation()}
                >
                    <BurgerMenu setMenuState={setMenuState} />
                </div>
            )}
            <div className="my_vanta" style={{ zIndex: "1" }} ref={myRef}>
                <UpNavbar />
                <Header setMenuState={setMenuState} />
                <div className="header_main_block">
                    <div className="header_block_left" data-aos="fade-right">
                        <h2
                            className={` bord ${
                                checked3 ? "headTitle" : "header__title_left"
                            }`} dangerouslySetInnerHTML={{ __html: t('top1').replace(/<br\s*\/?>/gi, '<br>') }}
                        >
                            
                        </h2>
                        <p
                            className={` bord  ${
                                checked3 ? "headDesc" : "header__desc_left"
                            }`}
                        >
                            {t('top2')}
                        </p>
                        <button
                            className="header__btn bord"
                            onClick={() => navigate("/meeting")}
                        >
                            {t('book_meet')}
                            {/* <img

                            className="btn__icon"
                            src={banner}
                            alt="arrow-right"
                        /> */}
                        </button>
                    </div>
                    <div className="header__block_right">
                        <img className="header__img" src={banner} alt="" />
                    </div>
                </div>
            </div>
            {/* </header> */}
            <div
                style={{ zIndex: "2" }}
                className="services UsSer"
                id="best_offers"
            >
                <img className="UsAI" src={UsAi} alt="" />
                <h1
                    className={` bord ${
                        checked3 ? "serviceTitle" : "services__title_main"
                    }`}
                    data-aos="fade-up"
                >
                    {t('ai1')}
                </h1>
                <ul className="services__list bord">
                    <li
                        onClick={() => navigate("/meeting")}
                        className="services__item bord"
                        data-aos="fade-up"
                    >
                        <img src={UsAi_img1} alt="" />
                        <h3 className="services_desc bord">
                            {t('ai2')} 990$
                        </h3>
                        <p className="bord">{t('ai3')}</p>
                        <p className="bord">
                            {t('ai4')}
                        </p>
                        <button
                            className="header__btn1 bord"
                            onClick={() => navigate("/meeting")}
                            type=""
                        >
                            {t('book_meet')}
                        </button>
                    </li>

                    <li
                        onClick={() => navigate("/meeting")}
                        className="services__item bord"
                        data-aos="fade-up"
                    >
                        <img src={UsAi_img2} alt="" />
                        <h3 className="services_desc bord">
                            {t('ai2')} 490$
                        </h3>
                        <p className="bord">
                            {t('ai5')}
                        </p>
                        <p className="bord">
                            {t('ai6')}
                        </p>
                        <button
                            onClick={() => navigate("/meeting")}
                            className="header__btn1 bord"
                            type=""
                        >
                            {t('book_meet')}
                        </button>
                    </li>
                </ul>
            </div>
            {/*  */}
            <div className={`main_duble ${checked3 && "mainh3"}`}>
                <div className="about_block_img2">
                    <img className="img1" src={art} alt="" />
                </div>
                <div
                    className="infos"
                    style={{
                        backgroundImage: `url(${aboutUsImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <h3 className="bord">
                        {t('bord1')}
                    </h3>
                    <br />
                    <h3 className="bord">
                        
                        {t('bord2')}

                    </h3>
                    <br />
                    <h3 className="bord">
                        {t('bord3')}
                    </h3>
                    <br />
                    <h2 className="big_h3 bord">
                        {t('bord4')}
                    </h2>
                    <h2 className="nones bord" style={{ display: "none" }}>
                        {t('bord4')}  
                    </h2>
                    <br />
                </div>
                <div
                    className="infos adap"
                    style={{
                        backgroundImage: `url(${artAdap})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <h3 className="bord">
                    {t('bord1')}

                    </h3>
                    <br />
                    <h3 className="bord">
                    {t('bord2')}

                    </h3>
                    <br />
                    <h3 className="bord">
                    {t('bord3')}

                    </h3>
                    <br />
                    <h2 className="big_h3 bord">
                    {t('bord4')}

                    </h2>
                    <br />
                </div>
            </div>
            {/*  */}
            <section className="services" id="our_services">
                <div className="ser_con">
                    <div className="services__items">
                        <h4>
                            {t('os')}
                        </h4>
                        <div className="services_items_block">
                            <h3 className="ser-h3 bord">{t('dev1')}</h3>
                            <ul
                                className={`ser_spisok bord ${
                                    checked3 && "ser_li"
                                }`}
                            >
                                <li>
                                    <a href="/meeting">{t("dev_list_text")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text2")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text3")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text4")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text5")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text6")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text7")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text8")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text9")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text10")}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t("dev_list_text11")}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="services_items_block">
                            <h3 className="ser-h3 bord">{t('design')} </h3>
                            <ul
                                className={`ser_spisok bord ${
                                    checked3 && "ser_li"
                                }`}
                            >
                                <li>
                                    <a href="/meeting">{t('design_text')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('design_text2')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('design_text3')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('design_text4')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('design_text5')}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="services_items_block">
                            <h3 className="ser-h3 bord">{t('adv')}</h3>
                            <ul
                                className={`ser_spisok bord ${
                                    checked3 && "ser_li"
                                }`}
                            >
                                <li>
                                    <a href="/meeting">{t('adv1')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('adv2')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('adv3')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('adv4')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('adv5')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('adv6')}</a>
                                </li>
                                <li>
                                    <a href="/meeting">{t('adv7')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div
                style={{ marginTop: "50px", marginBottom: "50px" }}
                id="about_us"
                className={`main_duble2 double2 ${checked3 && "mainh32"}`}
            >
                <div className="about_block_img">
                    <img src={about} alt="" />
                </div>
                <div
                    className="infos2"
                    style={{
                        backgroundImage: `url(${aboutUsImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                    }}
                >
                    <h1 className="bord">{t("About Us")}</h1>
                    <h3 className="bord">
                        <br />
                        {t("au_desc")}
                    </h3>
                </div>
                <div
                    className="infos2 adap2"
                    style={{
                        backgroundImage: `url(${artAdap})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                    }}
                >
                    <h1 className="bord">{t("About Us")}</h1>
                    <h3 className="bord">
                        <br />
                        {t("au_desc")}
                    </h3>
                </div>
            </div>
            {/*  */}
            <div className="scrol_ots">
                <h1 className="bord">{t('testom')}</h1>
                <div className="scroll_box">
                    <div className={`scroll_migh ${checked3 && "scrollP"}`}>
                        <p className="bord">
                            {t('otz1')}
                        </p>
                        <h3 className="bord">{t('otz1_name')}</h3>
                        <p className="p_scr bord">{t('otz1_work')}</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                width={"35%"}
                                src={z}
                                style={{ marginRight: "5px" }}
                                alt=""
                            />
                            <h5 className="bord">5</h5>
                        </div>
                    </div>
                    <div className={`scroll_migh ${checked3 && "scrollP"}`}>
                        <p className="bord">
                            {t('otz2')}
                        </p>
                        <h3 className="bord">{t('otz2_name')}</h3>
                        <p className="p_scr bord">{t('otz2_work')}</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                width={"35%"}
                                src={z}
                                style={{ marginRight: "5px" }}
                                alt=""
                            />
                            <h5 className="bord">5</h5>
                        </div>
                    </div>
                    <div className={`scroll_migh ${checked3 && "scrollP"}`}>
                        <p className="bord">
                            {t('otz3')}
                        </p>
                        <h3 className="bord">{t('otz3_name')}</h3>
                        <p className="p_scr bord">{t('otz3_work')}</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                width={"35%"}
                                src={zfour}
                                style={{ marginRight: "5px" }}
                                alt=""
                            />
                            <h5 className="bord">4.5</h5>
                        </div>
                    </div>
                    <div className={`scroll_migh ${checked3 && "scrollP"}`}>
                        <p className="bord">
                        {t('otz4')}
                        </p>
                        <h3 className="bord">{t('otz4_name')}</h3>
                        <p className="p_scr bord">{t('otz4_work')}</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                width={"35%"}
                                src={z}
                                style={{ marginRight: "5px" }}
                                alt=""
                            />
                            <h5 className="bord">5</h5>
                        </div>
                    </div>
                    <div className={`scroll_migh ${checked3 && "scrollP"}`}>
                        <p className="bord">
                            {t('otz5')}
                        </p>
                        <h3 className="bord">{t('otz5_name')}</h3>
                        <p className="p_scr bord">{t('otz5_work')}</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                width={"35%"}
                                src={z}
                                style={{ marginRight: "5px" }}
                                alt=""
                            />
                            <h5 className="bord">5</h5>
                        </div>
                    </div>
                    <div className={`scroll_migh ${checked3 && "scrollP"}`}>
                        <p className="bord">
                            {t('otz6')}
                        </p>
                        <h3 className="bord">{t('otz6_name')}</h3>
                        <p className="p_scr bord">{t('otz6_work')}</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                width={"35%"}
                                src={z}
                                style={{ marginRight: "5px" }}
                                alt=""
                            />
                            <h5 className="bord">5</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="photo_block">
                <h2
                    className="bord"
                    style={{
                        width: "85%",
                        fontSize: "35px",
                        color: "white",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: "40px",
                    }}
                >
                    {t('comm')}
                </h2>
                <Slider />
            </div>
            <div className="case">
                <div className="studentCase_block" id="portfolio">
                    <h1
                        className="blo-h1 bord"
                        style={{
                            fontSize: "50px",
                            lineHeight: "70px",
                            textTransform: "uppercase",
                        }}
                    >
                    {t('case')}
                    </h1>
                    <div className="studentCase_block_list">
                        <div className="studentCase_block_list">
                            {prodArr?.map((item) => (
                                <div className="case_block_card" key={item.id}>
                                    <div className="card_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="case-items-block-info">
                                        <a className="a-title bord" href="/">
                                            {item.title}
                                        </a>
                                        <div
                                            className={`info_title_mini bord ${
                                                checked3 && "descChelMini"
                                            }`}
                                        >
                                            {item.desc}
                                        </div>
                                        <div className="case__item-_block_date bord">
                                            {item.year}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {cardState && (
                            <div className="studentCase_block_list">
                                {prodArr2?.map((item) => (
                                    <div
                                        className="case_block_card"
                                        key={item.id}
                                    >
                                        <div className="card_img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="case-items-block-info">
                                            <a
                                                className="a-title bord"
                                                href="/"
                                            >
                                                {item.title}
                                            </a>
                                            <div
                                                className={`info_title_mini bord ${
                                                    checked3 && "descChelMini"
                                                }`}
                                            >
                                                {item.desc}
                                            </div>
                                            <div className="case__item-_block_date bord">
                                                {item.year}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                            <div
                                className="div"
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <button
                                    className="seemore_btn"
                                    onClick={() => setCardState(!cardState)}
                                >
                                    {cardState ? t("close") : t("see more")}
                                </button>
                            </div>
                    </div>
                </div>
            </div>

            {privacy && !visited && (
                <div className="privacy_police">
                    <p>
                        {t("privacy")}{" "}
                        <a href="/privacy_policy">{t("PP")}</a>{" "}
                    </p>
                    <button
                        onClick={() => {
                            setPrivacy(false);
                        }}
                    >
                        X
                    </button>
                </div>
            )}
            {/*  */}

            {!chelModalState && (
                <div
                    className="pomogator"
                    style={{
                        position: "fixed",
                        top: "40vh",
                        left: "20px",
                        width: "50px",
                        zIndex: "100",
                        cursor: "pointer",
                    }}
                    onClick={() => setChelModalState(true)}
                >
                    <img width="100%" src={chel} alt="" />
                </div>
            )}
            {chelModalState && (
                <ChelModal setChelModalState={setChelModalState} />
            )}
        </div>
    );
};

export default Home;
