import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function Toast() {
    const { toast } = useContext(ThemeContext);

    if (!toast) {
        return null;
    }

    return (
        <div className="toast-layout text-white border-radius-5 bg-toggle d-flex-row gap-10 align-items-center">
            <img src="/icon-incorrect.svg" alt="Taost X Image"/>
            <h3>{toast}</h3>
        </div>
    )
}

export default Toast;