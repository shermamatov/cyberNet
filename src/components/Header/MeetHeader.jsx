import React from "react";
import "./header.css";
import {  useNavigate } from "react-router-dom";
import logo from "../../image/logo2.png";
import burgerMenu from "../../image/bar2.png";
import { useTranslation } from "react-i18next";
// import BurgerMenu from "./BurgerMenu";
import "./headerAdaptive.css";
import i18next from "i18next";
const MeetHeader = ({ setMenuState }) => {
    const languages = [
        {
          code: 'en',
          name: 'ENG',
        },
        {
          code: 'ru',
          name: 'RUS',
        },
        {
            code: 'arm',
            name: 'ARM',
        }
      ]
    const Navigate = useNavigate();
    const path = window.location.pathname.split('/')
    const loc = path[1]
    const loc2 = path[2]
    const handleLanguageChange = (language) => {
        localStorage.setItem('lang', language)
        const language2 = localStorage.getItem('lang')
        if(language2 ==='en'){
            i18next.changeLanguage('en')
            window.location.pathname = `${loc2}`
        }
        else if(path[1] !== ' ' && loc2 === undefined){
            window.location.pathname =  `${language2}/${loc}`
        }
        else{
            window.location.pathname =  `${language2}/${loc2}`
        }
    };
    const currentLanguageCode = localStorage.getItem('lang')
    function togle() {
        setMenuState(true);
    }
    return (
        <div className="container">
            <div className="navbar">
                <img
                    onClick={() => Navigate("/")}
                    className="nv2"
                    src={logo}
                    alt="navbar logo"
                />
                <ul className="navbar__list">
                    <li>
                        <img
                            onClick={() => Navigate("/")}
                            className="navbar__logo"
                            src={logo}
                            alt="navbar logo"
                        />
                    </li>
                   
                </ul>

                <div
                    className="auth_button_div"
                >
                    <select onChange={(e) => {handleLanguageChange(e.target.value)}} value={currentLanguageCode} name={loc2} className="select_leng2">
                    {
                        languages.map((e)=>(
                            <option key={e.code}  value={e.code}>{e.name}</option>

                        ))
                    }
                    </select>
                    
                </div>
                <div className="burger_menu">
                    <div className="burger_menu_img">
                        <img
                            onClick={(e) => {
                                togle();
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

export default MeetHeader;
