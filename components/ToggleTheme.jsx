import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeImg =
    theme === "light"
      ? { moon: "moon-dark", sun: "sun-dark" }
      : { moon: "moon-light", sun: "sun-light" };

    return (
        <div className="quiz-theme-toggle d-flex-row gap-10">
            <img src={`/icon-${themeImg.sun}.svg`} alt="moon icon" />

            <div className="theme-toggle-button d-flex-row align-items-center justify-content-center">
              <input type="checkbox" onChange={toggleTheme} />
              <span className={`toggle-slider ${theme === "light" ? "light" : "dark"}`}></span>
            </div>

            <img src={`/icon-${themeImg.moon}.svg`} alt="sun icon" />
        </div>
    )
}

export default ToggleTheme;