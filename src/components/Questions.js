import Accordion from "./Accordion"
import { StyledQuestions } from "./styles/Questions.styled"
import { qAndAs } from "../data"
export default function Questions() {
    return (
        <StyledQuestions id='faq'>
            {qAndAs.map((qAndA) => {
                const {id, question, answer} = qAndA;
                return (
                    <Accordion key={id} question={question} answer={answer}></Accordion>
                )
            })}

        </StyledQuestions>
    )
}
