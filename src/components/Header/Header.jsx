import React, { useEffect, useState } from "react";
import "./header.css";
import "./headerAdaptive.css";
import { useNavigate } from "react-router-dom";
import burgerMenu from "../../image/bar.png";
import { useChel } from "../../contexts/ChelContext";
import { useTranslation } from "react-i18next";
import logo from "../../image/logo.png";
import i18next from "i18next";
const Header = ({ setMenuState }) => {
    const languages = [
        {
          code: 'ru',
          name: 'RUS',
        },
        {
          code: 'en',
          name: 'ENG',
        },
        {
            code: 'arm',
            name: 'ARM',
        }
    ]
    const Navigate = useNavigate({replace:false});
    const { t } = useTranslation();
    const handleLanguageChange = (language) => {
        const path = window.location.pathname.split('/')

        // Меняем URL на другой язык и заменяем текущий URL без добавления записи в историю
        localStorage.setItem('lang', language)
        const language2 = localStorage.getItem('lang')// извлекаем первый сегмент из URL
        if(language2 ==='en'){
            i18next.changeLanguage('en')
            window.location.pathname = ''
        }
        else if(path[1] !== ' '){
        window.location.pathname = path[1] = language2
        }
    };
    const currentLanguageCode =  localStorage.getItem('lang')
    // const [menuState, setMenuState] = useState(false);
    const { checked1, setCheked1, checked2, setCheked2, border, checked3 } =
        useChel();
    useEffect(() => {
        // checked1 ? filterEst() : filterNet();
        border();
    }, [checked2]);

    return (
        <div className="container">
            <div className="navbar">
                <img
                    onClick={() => Navigate("/")}
                    className="nv2"
                    src={logo}
                    alt="navbar logo bord"
                />
                <ul className={` ${checked3 ? "novela" : "navbar__list "}`}>
                    <li className="bord">
                        <img
                            onClick={() => Navigate("/")}
                            className="navbar__logo"
                            src={logo}
                            alt="navbar logo bord"
                        />
                    </li>

                    <li className="list__item bord">
                        <a href="#about_us">{t('about_us')}</a>
                    </li>
                    <li className="list__item bord">
                        <a href="#best_offers">{t('best_off')}</a>
                    </li>
                    <li className="list__item bord">
                        <a href="#our_services">{t('our_services')}</a>
                    </li>
                    <li className="list__item bord">
                        <a href="#portfolio">{t('portfolio')}</a>
                    </li>
                    {/* <li className="list__item">
                        <a href="#blog">blog</a>
                    </li> */}
                </ul>
                {/* <input type="text" className="navbar__input" /> */}

                <div
                    className="auth_button_div"
                    // style={{ display: "flex", alignItems: "center" }}
                >
                    <button
                        className="auth__button"
                        onClick={() => Navigate("/meeting")}
                    >
                        {t('book_meet')}
                    </button>
                    <select className="select_leng" value={currentLanguageCode} onChange={(e)=>{handleLanguageChange(e.target.value)}}>
                    {
                        languages.map(({ code, name})=>(
                            <option key={code} value={code}>{name} </option>

                        ))
                    }
                    </select>
                </div>
                <div className="burger_menu">
                    <div className="burger_menu_img">
                        <img
                            onClick={(e) => {
                                setMenuState(true);
                                e.stopPropagation();
                            }}
                            src={burgerMenu}
                            alt=""
                            width="100%"
                        />
                    </div>
                </div>
            </div>

            {/* <!-- navbar end --> */}
        </div>
    );
};

export default Header;
