import ToggleTheme from "./ToggleTheme";

export default function Header() {
    return (
        <div className="quiz-app-header d-flex-row space-between align-items-center padding-10 margin-bottom-20">
            <div className="quiz-app-title d-flex-row gap-20 align-items-center">
              <img src="/icon-html.svg" alt="Quiz App Logo" className="icon-html"/>
              <h2 className="text-bold-800 primary-text">HTML</h2>
            </div>

            <ToggleTheme />
        </div>
    )
}