import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div>
            <footer className="footer__cyber">
                <h2 className="title" onClick={() => navigate("/meeting")}>
                    {t("start")}
                </h2>
                <div style={{ textAlign: "left" }} className="flexbox">
                    <div className="cols__footer">
                        <a
                            href="/"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            {" "}
                            {t("ft1")}
                        </a>
                        <br />
                        <a
                            href="/privacy_policy"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            {t("priv1")}
                        </a>
                    </div>
                    <div style={{ color: "white" }} className="cols__footer">
                        <a
                            style={{ textDecoration: "none", color: "white" }}
                            href="mailto:info@1cybernet.com"
                        >
                            info@1cybernet.com
                        </a>{" "}
                        <br />
                        <a
                            style={{ textDecoration: "none", color: "white" }}
                            href="tel:+18188581208"
                        >
                            +1 818 858 12 08
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
