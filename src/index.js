import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ChelContext from "./contexts/ChelContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['en','ru','arm'],
  fallbackLng: "en",
  detection: {
    order: ['localStorage','cookie', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie']
  },
  backend: {
   loadPath: '/static/{{lng}}/translation.json',
  },
  

});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ChelContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChelContext>
);
