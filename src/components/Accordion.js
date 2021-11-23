import { Answer, Button, Minus, Plus, Question, QuestionContainer, StyledAccordion } from "./styles/Accordion.styled";
import { useState } from "react"
export default function Accordion( {question, answer}) {
    const [display, setDisplay] = useState(false)
    const toggleAccordion = () => {
        setDisplay(!display)
    }
    return (
        <StyledAccordion>
            <QuestionContainer onClick={toggleAccordion}>
                <Question>{question}</Question>
                <Button>
                    <Minus toggle={display}></Minus>
                    <Plus toggle={display}></Plus>
                </Button>
            </QuestionContainer>
            <Answer toggle={display}>{answer}</Answer>
        </StyledAccordion>
    )
}
