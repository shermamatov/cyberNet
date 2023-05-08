import React, { createContext, useContext, useState } from "react";
export const chelContext = createContext();
export const useChel = () => useContext(chelContext);
const ChelContext = ({ children }) => {
    const [checked1, setCheked1] = useState(false);
    const [checked2, setCheked2] = useState(false);
    const [checked3, setCheked3] = useState(false);
    const [checked4, setCheked4] = useState(false);
    function border() {
        const bordik = document.querySelectorAll(".bord");
        if (checked2) {
            for (let i of bordik) {
                i.style.border = "2px solid orange";
            }
        } else {
            for (let i of bordik) {
                i.style.border = "none";
            }
        }
    }
    function upFontSize(size, className, lowSize) {
        const fontSize = document.querySelectorAll(`.${className}`);
        if (checked3) {
            for (let i of fontSize) {
                i.style.fontSize = `${size}px`;
            }
        } else {
            for (let i of fontSize) {
                i.style.fontSize = `${lowSize}`;
            }
        }
        console.log(size);
    }
    const value = {
        checked1,
        setCheked1,
        checked2,
        setCheked2,
        checked3,
        setCheked3,
        checked4,
        setCheked4,
        border,
        upFontSize,
    };
    return (
        <chelContext.Provider value={value}>{children}</chelContext.Provider>
    );
};

export default ChelContext;
