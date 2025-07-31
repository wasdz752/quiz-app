import ThemeContext from "./ThemeContext";
import { useEffect, useState } from "react";

function ThemeProvider({children}) {
    const [toast, setToast] = useState();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    function showHideToast(message) {
        setToast(message);

        setTimeout(() => {
            setToast(null)
        }, 3000)
    }
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };
    
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme, setTheme]);

    return (
        <ThemeContext value={{theme, setTheme, toggleTheme, showHideToast, toast}}>
            {children}
        </ThemeContext>
    )
}

export default ThemeProvider;