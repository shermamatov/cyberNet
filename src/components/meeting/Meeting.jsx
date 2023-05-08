import React, { useState } from "react";
import "./meeting.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import number from "../../image/number2.png";
import emailImg from "../../image/email2.png";
import MeetHeader from "../Header/MeetHeader";
import BurgerMenu from "../Header/BurgerMenu";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Meeting = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [comp, setComp] = useState("");
    const [site, setSite] = useState("");
    const [act, setAct] = useState("");
    const [lang, setLang] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const send_mail = () => {
        const data = new FormData();
        data.append("full_name", name);
        data.append("phone", phone);
        data.append("email", email);
        data.append("company_name", comp);
        data.append("website", site);
        data.append("type_of", act);
        data.append("languages", lang);
        data.append("day", day);
        data.append("time", time);
        data.append("comment", comment);
        axios
            .post("/send/", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [menuState, setMenuState] = useState(false);
    const [submit, setSubmit] = useState(true);
    function changeLang(newLang) {
        lang.includes(newLang)
            ? setLang(lang.replace(newLang, ""))
            : lang.length === 0
            ? setLang(newLang)
            : setLang(lang + " " + newLang);
    }
    function getNextFiveDays() {
        const days = [];
        for (let i = 0; i < 5; i++) {
            const date = moment().add(i, "days");
            days.push({
                date: date.format("DD"),
                dayOfWeek: date.format("dddd"),
            });
        }
        return days;
    }
    const timeSlots = () => {
        const slots = [];
        const start = moment("10:00am", "hh:mma");
        const end = moment("8:00pm", "hh:mma");
        while (start.isBefore(end)) {
            const slot = `${start.format("hh:mma")} - ${start
                .add(1, "hour")
                .format("hh:mma")}`;
            slots.push(slot);
        }
        return slots;
    };

    const slots = timeSlots();
    const dates = getNextFiveDays();
    return (
        <div>
            <div className="up_navbar">
                <div className="upNav_email">
                    <img src={emailImg} alt="" />
                    <a
                        style={{ color: "black" }}
                        href="mailto:info@1cybernet.com"
                    >
                        example@example.com
                    </a>
                </div>
                <div className="upNav_number">
                    <img src={number} alt="" />
                    <a style={{ color: "black" }} href="tel:+18188581208">
                        +1 818 858 12 08
                    </a>
                </div>
            </div>
            {menuState && (
                <div
                    className="sidebarMenu"
                    onClick={(e) => e.stopPropagation()}
                >
                    <BurgerMenu setMenuState={setMenuState} />
                </div>
            )}
            <MeetHeader setMenuState={setMenuState} />
            {submit ? (
                <>
                    <div
                        style={{
                            color: "black",
                            width: "85%",
                            margin: "auto",
                            marginTop: "30px",
                            marginBottom: "20px",
                        }}
                        className={
                            visible === false ? "container" : "hidden_block"
                        }
                    >
                        <h1>{t("book1")}</h1>
                        <h3>{t("book2")}</h3>
                        <div className="main_meeting1">
                            <div style={{ width: "40%" }}>
                                <div className="main_meeting">
                                    <p>{t("fn")}</p>
                                    <input
                                        placeholder="Johne Doe"
                                        type="text"
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="main_meeting">
                                    <p>{t("phone")}</p>
                                    <input
                                        placeholder="819-234-22-22"
                                        type="text"
                                        onChange={(event) => {
                                            setPhone(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="main_meeting">
                                    <p>{t("mail")}</p>
                                    <input
                                        placeholder="example@example.com"
                                        type="text"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div style={{ width: "50%" }}>
                                <div className="main_meeting">
                                    <p>{t("cp")}</p>
                                    <input
                                        placeholder="example"
                                        type="text"
                                        onChange={(event) => {
                                            setComp(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="main_meeting">
                                    <p>{t("web_site")}</p>
                                    <input
                                        placeholder="www.example.com"
                                        type="text"
                                        onChange={(event) => {
                                            setSite(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="main_meeting met1">
                                    <p>{t("typeOf")}</p>
                                    <textarea
                                        placeholder="Choose services"
                                        type="text"
                                        onChange={(event) => {
                                            setAct(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="main_meeting met1">
                                    <p>{t("lang")}</p>
                                    <div className="meeting_checkboxes">
                                        <div className="meeting_checkbox">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                onClick={() => {
                                                    changeLang("Russian");
                                                }}
                                            />
                                            <p>{t("lang1")}</p>
                                        </div>
                                        <div className="meeting_checkbox">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                onClick={() => {
                                                    changeLang("English");
                                                }}
                                            />{" "}
                                            <p>{t("lang2")}</p>
                                        </div>
                                        <div className="meeting_checkbox">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                onClick={() => {
                                                    changeLang("Armenian");
                                                }}
                                            />{" "}
                                            <p>{t("lang3")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn_block">
                            <button
                                onClick={() => {
                                    setVisible(true);
                                }}
                                className="next_btn"
                            >
                                {t("Next")}{" "}
                            </button>
                        </div>
                    </div>
                    <div
                        style={{
                            padding: "20px",
                            color: "black",
                            width: "85%",
                            margin: "auto",
                            marginTop: "30px",
                            marginBottom: "20px",
                        }}
                        className={visible ? "container" : "hidden_block"}
                    >
                        <h1 style={{ color: "black" }}>{t("book1")}</h1>
                        <h3 style={{ color: "black" }}>{t("book2")}</h3>
                        <div className="main_meeting1">
                            <div style={{ width: "40%" }}>
                                <div className="main_meeting">
                                    <p>{t("day")}</p>
                                    <select
                                        placeholder="819-234-22-22"
                                        type="text"
                                        onChange={(event) => {
                                            setDay(event.target.value);
                                        }}
                                    >
                                        {dates.map((date) => (
                                            <option
                                                value={`${date.date} ${date.dayOfWeek}`}
                                            >
                                                {`${date.date} ${date.dayOfWeek}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="main_meeting">
                                    <p>{t("time")}</p>
                                    <select
                                        placeholder="819-234-22-22"
                                        type="text"
                                        onChange={(event) => {
                                            setTime(event.target.value);
                                        }}
                                    >
                                        {slots.map((slot) => (
                                            <option value={`${slot}`}>
                                                {`${slot}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div style={{ width: "50%" }}>
                                <div className="main_meeting met1">
                                    <p>{t("comment")}</p>
                                    <textarea
                                        placeholder="Comment"
                                        type="text"
                                        onChange={(event) => {
                                            setComment(event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="btn_block">
                            <button
                                onClick={() => {
                                    send_mail();
                                    setSubmit(false);
                                }}
                                className="next_btn"
                            >
                                {t("submit")}{" "}
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="thenk">
                    <h1>{t("thanks")} </h1>
                    <button
                        onClick={() => {
                            navigate("/");
                            setSubmit(true);
                        }}
                    >
                        {t("home")}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Meeting;
