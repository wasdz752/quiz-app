import { useState } from "react";
import data from "../public/data.json";
import Header from "../components/Header";
import OptionsList from "../components/OptionsList"
import Toast from "./Toast";

function QuizJs() {
    const [questionCount, setQuestionCount] = useState(0);
    const htmlQuiz = data.quizzes[2]

    return (
        <div className="question-container d-flex-col">
            <Header />

            <div className="question-inner d-flex-row flex-grow">
                <div className="question-text d-flex-col align-items-start gap-20 padding-10 max-width padding-top z-index">
                    <h4 className="secondary-text text-bold-400">
                        <i>{questionCount === 10 ? "Quiz completed" : `Question ${questionCount + 1} of 10`}</i>
                    </h4>

                    <h2 className="primary-text text-bold-700 text-medium">
                        {questionCount === 10 ? "You scored..." : htmlQuiz.questions[questionCount].question}
                    </h2>
                </div>

                <OptionsList question={htmlQuiz.questions[questionCount] ?? null} nextQuestion={setQuestionCount} questionCount={questionCount} icon={"js"}/>
            </div>

            <Toast />
        </div>
    )
}

export default QuizJs;