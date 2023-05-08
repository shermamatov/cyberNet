import React, { useEffect } from "react";
import "./UpNavbar.css";
import number from "../../../image/number.png";
import email from "../../../image/email.png";
import { useChel } from "../../../contexts/ChelContext";
const UpNavbar = () => {
    const { checked1, setCheked1, checked2, setCheked2, border } = useChel();
    useEffect(() => {
        // checked1 ? filterEst() : filterNet();
        border();
    }, [checked2]);

    return (
        <div className="up_navbar">
            <div className="upNav_email bord">
                <img src={email} alt="" />
                <a href="mailto:info@1cybernet.com">info@1cybernet.com</a>
            </div>
            <div className="upNav_number bord">
                <img src={number} alt="" />
                <a href="tel:+18188581208">+1 818 858 12 08</a>
            </div>
        </div>
    );
};

export default UpNavbar;
