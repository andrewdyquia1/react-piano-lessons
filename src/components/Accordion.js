import { Answer, ButtonContainer, Minus, Plus, Question, QuestionContainer, StyledAccordion } from "./styles/Accordion.styled";
import { useState } from "react"
export default function Accordion( {question, answer}) {
    const [display, setDisplay] = useState(false)
    const toggleAccordion = () => {
        setDisplay(!display)
    }
    return (
        <StyledAccordion>
            <QuestionContainer>
                <Question>{question}</Question>
                <ButtonContainer onClick={toggleAccordion}>
                    <Minus toggle={display}></Minus>
                    <Plus toggle={display}></Plus>
                </ButtonContainer>
            </QuestionContainer>
            <Answer toggle={display}>{answer}</Answer>
        </StyledAccordion>
    )
}
