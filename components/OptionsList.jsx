import { useContext, useState, useEffect, useRef } from "react";
import { CorrectContext } from "../contexts/ReducerContext";
import ThemeContext from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

function OptionsList({ question, nextQuestion, questionCount, icon }) {
    const { theme, showHideToast } = useContext(ThemeContext)
    const { correctCount, dispatch } = useContext(CorrectContext);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const options = question?.options;
    const inputRefs = useRef([]);
    const [buttonText, setButtonText] = useState('Submit Answer')

    useEffect(() => {
        if (options && Array.isArray(options)) {
          inputRefs.current = inputRefs.current.slice(0, options.length);
        } else {
          inputRefs.current = [];
        }
    }, [options]);


    useEffect(() => {
        dispatch({type: "reset"})
    }, [dispatch])

    const handleSubmitAnswer = () => {
        if (!selectedAnswer) {
            showHideToast("Please select an option !")
            return;
        }

        if (selectedAnswer === question.answer) {
            dispatch({ type: "increment" });
        }
        setIsSubmitted(true);
        setButtonText(questionCount == 9 ? "Submit Quiz" : "Next Answer")
    };

    const handleNextQuestion = () => {
        setIsSubmitted(false);
        setSelectedAnswer(null);

        nextQuestion(questionCount + 1)

        if (nextQuestion != 10) {
            setButtonText("Submit Answer")
        }
    };

    if (questionCount === 10) {
        return (
            <div className="quiz-app-result-wrapper max-width d-flex-col gap-20">
                <div className="quiz-app-result d-flex-col space-between gap-10 border-radius-20 bg-button align-items-center padding-rem">
                    <div className="d-flex align-items-center gap-10">
                        <img src={`/icon-${icon}.svg`} className={`icon-${icon} margin-right-20`}/>
                        <h3 className="primary-text">{icon.toUpperCase()}</h3>
                    </div>

                    <h1 className="primary-text text-bold-800 text-large">{correctCount}</h1>

                    <h3 className="bg-toggle padding-10 border-radius-10 text-white">{correctCount * 100 / 10}%</h3>

                    <h3 className="secondary-text">out of 10</h3>
                </div>

                <Link to="/">
                    <button className="question-button border-radius-20 text-medium text-bold-600 text-white max-width bg-toggle z-index">Try Again</button>
                </Link>

                <img src={`/pattern-background-desktop-${theme}.svg`} alt="Quiz App Design" className="quiz-app-design"/>
            </div>
    )}   
    return (
        <div className="question-options d-flex-col align-items-center gap-30 max-width justify-content-center">
            {options.map((option, index) => {
                const isCorrect = option === question.answer;
                const isSelected = option === selectedAnswer;
                const showCorrect = isSubmitted && isCorrect;
                const showSelected = !showCorrect && isSubmitted && isSelected? "uncorrect-answer" : "";

                return (
                    <div
                        key={index}
                        className={`question-option-box d-flex-row align-items-center gap-10 padding-5 ${
                            showCorrect ? "correct-answer" : ""} ${showSelected} ${isSelected && !isSubmitted ? "selected-answer" : ""}`}
                    >
                        <div className="question-option-index margin-left-20 margin-right-15">
                            <h2 className="index-text">{index + 1}</h2>
                        </div>
                        <input
                            ref={(el) => (inputRefs.current[index] = el)} // Assign ref
                            type="radio"
                            name="option"
                            value={option}
                            className="max-width"
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                            disabled={isSubmitted}
                        />
                        <label className="primary-text text-medium text-bold-500 flex-grow">
                            {option}
                        </label>

                        {showCorrect ? (<img src="/icon-correct.svg" alt="Answer Correct Icon" className="margin-right-20"/>): ""}

                        {showSelected ? (<img src="/icon-error.svg" alt="Answer Incorrect Icon" className="margin-right-20"/>) : ""}
                    </div>
                );
            })}

            <button
                className="question-button border-radius-20 text-white bg-toggle text-bold-600 text-small z-index width-90"
                onClick={(e) => {
                    e.target.innerText === "Submit Answer"
                        ? handleSubmitAnswer()
                        : handleNextQuestion();
                }}
            >
                {buttonText}
            </button>

            <img src={`/pattern-background-desktop-${theme}.svg`} alt="Quiz App Design" className="quiz-app-design"/>
        </div>
    );
}

export default OptionsList;
