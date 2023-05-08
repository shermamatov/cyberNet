import React, { useEffect } from "react";
import "./chelModal.css";
import chelClose from "../../../image/chelClose.png";
import { useChel } from "../../../contexts/ChelContext";
import { useTranslation } from "react-i18next";
const ChelModal = ({ setChelModalState }) => {
    const { t } = useTranslation();
    const {
        checked1,
        setCheked1,
        checked2,
        setCheked2,
        checked3,
        setCheked3,
        setCheked4,
        checked4,
    } = useChel();
    useEffect(() => {
        console.log(checked3);
    }, [checked3]);
    return (
        <div
            className="chel_modal_main_block"
            onClick={() => setChelModalState(false)}
        >
            <div className="chel_modal" onClick={(e) => e.stopPropagation()}>
                <img
                    onClick={() => setChelModalState(false)}
                    src={chelClose}
                    className="closeModal"
                    alt=""
                />
                <div className="chel_modal_block">
                    <h2>{t("Ad")}</h2>
                    <button className="reset_btn">{t("reset_set")}</button>
                    <div className="togle_main_block">
                        <h3>{t("choose")}</h3>
                        <div
                            className="togle_block"
                            style={{ marginTop: "30px" }}
                        >
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked1}
                                    onChange={() => setCheked1(!checked1)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>{t("ssp")}</h4>
                                <h5>{t("ssp2")}</h5>
                            </div>
                        </div>
                        <div className="togle_block">
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked2}
                                    onChange={() => setCheked2(!checked2)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>{t("ssp3")}</h4>
                                <h5>{t("ssp4")}</h5>
                            </div>
                        </div>
                        <div className="togle_block">
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked3}
                                    onChange={() => setCheked3(!checked3)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>{t("ssp5")}</h4>
                                <h5>{t("ssp6")}</h5>
                            </div>
                        </div>
                        <div
                            className="togle_block"
                            style={{ borderBottom: "none" }}
                        >
                            <label className="togle">
                                <input
                                    type="checkbox"
                                    checked={checked4}
                                    onChange={() => setCheked4(!checked4)}
                                />
                                <span className="togler round"></span>
                            </label>
                            <div className="togle_block_text">
                                <h4>{t("ssp7")}</h4>
                                <h5>{t("ssp8")}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blue_fone"></div>
            </div>
        </div>
    );
};

export default ChelModal;
