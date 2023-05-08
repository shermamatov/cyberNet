import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../image/close.png";
import { useChel } from "../../contexts/ChelContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const BurgerMenu = ({ setMenuState }) => {
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

    const { t } = useTranslation();
    const navigate = useNavigate();
    
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
    const { checked1, setCheked1, checked2, setCheked2, border } = useChel();
    useEffect(() => {
        // checked1 ? filterEst() : filterNet();
        border();
    }, [checked2]);

    return (
        <div className="sidebar bord" style={{ zIndex: "20" }}>
            <img
                onClick={() => setMenuState(false)}
                src={closeIcon}
                alt=""
                width="50px"
            />
            <ul>
                <button onClick={() => navigate("/meeting")}>
                    {t("book_meet")}
                </button>
                <select onChange={(e) => {handleLanguageChange(e.target.value); window.location.reload()}} value={currentLanguageCode} className="select_leng3">
                    {
                        languages.map((e)=>(
                            <option  key={e.code}  value={e.code}>{e.name}</option>

                        ))
                    }
                    </select>
                <li className="list__item bord">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#about_us"
                    >
                        {t("about_us")}
                    </a>
                </li>
                <li className="list__item bord">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#best_offers"
                    >
                        {t("best_off")}
                    </a>
                </li>
                <li className="list__item bord">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#our_services"
                    >
                        {t("our_services")}
                    </a>{" "}
                </li>
                <li className="list__item bord">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#portfolio"
                    >
                        {t("portfolio")}
                    </a>{" "}
                </li>
                {/* <li className="list__item">
                    <a
                        onClick={() => setMenuState(false)}
                        style={{ color: "white" }}
                        href="#blog"
                    >
                        blog
                    </a>{" "}
                </li> */}
            </ul>
        </div>
    );
};

export default BurgerMenu;
