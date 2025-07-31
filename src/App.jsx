import Header from "../components/Header";
import "./App.css";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import Toast from "../components/Toast";

function App()  {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App d-flex-col">
      <Header />

      <div className="quiz-app-container padding-20 d-flex-row justify-content-center flex-grow gap-20">
        <div className="quiz-app-text max-width">
          <div className="quiz-app-text-inner d-flex-col gap-20">

            <h1 className="primary-text text-bold-400">
              Welcome to the <b className="text-bold-600">Frontend Quiz !</b>
            </h1>

            <p className="secondary-text">Pick a subject to get started.</p>
          </div>
        </div>

        <div className="quiz-app-wrapper max-width d-flex-row align-items-center">
          <div className="quiz-app-languages d-flex-col alig-items-center gap-20">
            <Link to="/html">  
              <button className="primary-text quiz-app-language d-flex-row align-items-center gap-20 border-radius-20" style={{fontFamily: "Rubik"}}> <img src="./icon-html.svg" alt="Home HTML Icon" className="icon-html"/> <h3>HTML</h3></button>
            </Link>
            <Link to="/css">  
              <button className="primary-text quiz-app-language d-flex-row align-items-center gap-20 border-radius-20" style={{fontFamily: "Rubik"}}> <img src="./icon-css.svg" alt="Home CSS Icon" className="icon-css"/> <h3>CSS</h3></button>
            </Link>
            <Link to="/js">  
              <button className="primary-text quiz-app-language d-flex-row align-items-center gap-20 border-radius-20" style={{fontFamily: "Rubik"}}> <img src="./icon-js.svg" alt="Home Javascript Icon" className="icon-js"/> <h3>Javascript</h3></button>
            </Link>
            <Link to="/accessibility">  
              <button className="primary-text quiz-app-language d-flex-row align-items-center gap-20 border-radius-20" style={{fontFamily: "Rubik"}}> <img src="./icon-accessibility.svg" alt="Home Accessibility Icon" className="icon-accessibility"/> <h3>Accessibility</h3></button>
            </Link>
          </div>
        </div>
      </div>

      <Toast />

      <img src={`/pattern-background-desktop-${theme}.svg`} className="quiz-app-design"/>
    </div>
  );
}

export default App;
