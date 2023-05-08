import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./Route/MainRoutes";
import i18next from "i18next";

function App() {
    const html1 = document.querySelector('html')
    const getLanguageFromUrl = () => {
        const language = window.location.pathname.split('/')[1]; // извлекаем первый сегмент из URL
        //  
        return language;
      };
    useEffect(() => {
        const language = getLanguageFromUrl();
        i18next.changeLanguage(language); // Изменяем язык в i18next
        html1.lang = localStorage.getItem('lang')
    }, []);
    return (
        <div style={{ position: "relative", overflowX: "hidden" }}>
            {/* <Header /> */}
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
