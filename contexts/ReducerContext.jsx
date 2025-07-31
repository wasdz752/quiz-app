import { createContext, useEffect, useReducer } from "react";
import correctReducer from "../reducers/correctReducer";

const CorrectContext = createContext();

export default function CorrectProvider({ children }) {
    const [correctCount, dispatch] = useReducer(correctReducer, 0, () => {
        const storedCount = localStorage.getItem("correct_count");
        return !isNaN(storedCount) ? Number(storedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem("correct_count", correctCount);
    }, [correctCount]);

    return (
        <CorrectContext.Provider value={{ correctCount, dispatch }}>
            {children}
        </CorrectContext.Provider>
    );
}

export { CorrectContext };
