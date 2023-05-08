import React, { useState } from 'react';
import MeetHeader from "../Header/MeetHeader";
import BurgerMenu from "../Header/BurgerMenu";
import './privacy.css'
import { useTranslation } from 'react-i18next';
const PrivacyPolicy = () => {
    const [menuState, setMenuState] = useState(false);
    // const [submit, setSubmit] = useState(true);
    const {t} = useTranslation()
    return (
        
        <div>
        {menuState && (
                <div
                    className="sidebarMenu"
                    onClick={(e) => e.stopPropagation()}
                >
                    <BurgerMenu setMenuState={setMenuState} />
                </div>
            )}
            <MeetHeader setMenuState={setMenuState} />
        <div id="inner_content-172-20" class="container_pol"><div>
        <h1 class="">{t("priv1")}</h1>
        <p>
            <span>
            {t("priv2")}							
            </span>
        </p>
        <h2><strong>{t("priv3")}</strong></h2>
        <p>
        <span>
        {t("priv4")}
        </span></p>
        <h2><strong>{t("priv5")}</strong></h2>
        <p>
        <span>
        {t("priv6")}</span></p>
        <p>
        <span>
        {t("priv7")} </span><a href="https://automattic.com/privacy/"><span>
            https://automattic.com/privacy/</span></a><span>
            .</span></p>
        <h2><strong>{t("priv8")}</strong></h2>
        <p>
        <span>
        {t("priv9")}</span></p>
        <h2><strong>{t("priv10")}</strong></h2>
        <p>
        <span>
        {t("priv11")}</span></p>
        <p>
        <span>
        {t("priv12")}</span></p>
        <p>
        <span>
        {t("priv13")}
        </span>
        </p>
        <p>
        <span>
        {t("priv14")}
        </span>
        </p>
        <h2><strong>{t("priv15")}</strong></h2>
        <p>
        <span>
        {t("priv16")}
        </span>
        </p>
        <p>
        <span>
        {t("priv17")}
        </span>
        </p>
        <h2><strong>{t("priv18")}</strong></h2>
        <p>
        <span>
        {t("priv19")}
        </span>
        </p>
        <p>
        <span>
        {t("priv20")}
        </span>
        </p>
        <p>
        <span>
        {t("priv21")}
        </span>
        </p>
        <p>
        <span>
        {t("priv22")}
        </span>
        </p>
        <h2><strong>{t("priv23")}</strong></h2>
        <p>
        <span>
        {t("priv24")}
        </span>
        </p>
        <h2><strong>{t("priv25")}</strong></h2>
        <p>
        <span>
            {t("priv26")}
             <a href="tel:+1(818)8581415">+1(818)8581415</a>.</span></p>
        </div></div>
        </div>
    );
};

export default PrivacyPolicy;