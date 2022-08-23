import { StyledQuestions } from "./styles/Questions.styled"
import QuestionsSection from "./QuestionsSection"
import { qAndAs } from "../data"
export default function Questions() {
    return (
        <StyledQuestions id='faq'>
            <h2>Questions</h2>
        {qAndAs.map((qAndA) => {            
        const id = qAndAs.indexOf(qAndA)
        const {questions, sectionName} = qAndA;
        return (
            <QuestionsSection key={id} children={sectionName} questionsAndAnswers={questions} />
            )
        })}
        </StyledQuestions>
    )
}

//LOOK UP HOW TO BRANCH IN NPM
//CREATE SUBSECTIONS IN QNA SECTION