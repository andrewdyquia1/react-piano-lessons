import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const StyledAccordion = styled.div`
    background-color: var(--dark-gray);
    min-width: 85vw;
    margin: 0 auto 5px;
    text-align: start;
    line-height: 1.5;
    font-size: 1.2rem;

`

export const QuestionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    cursor: pointer;
    
`
export const Question = styled.div`
    padding-right: 15vw;
`

export const ButtonContainer = styled.div`
    cursor: pointer;
`

export const Minus = styled(FaMinus)`
    width: 30px;
    ${
        props => {
            if(props.toggle){
                return `
                    display: none;
                `
            } else {
                return `
                    display: block;
                `
            }
        }
    }
`

export const Plus = styled(FaPlus)`
    width: 30px;

    ${
        props => {
            if(props.toggle){
                return `
                    display: block;
                `
            } else {
                return `
                    display: none;
                `
            }
        }
    }
`
export const Answer = styled.div`

    ${
        props => {
            if(props.toggle){
                return `
                    display: block;
                    padding: 50px 15vw 50px 30px;
                    background-color: var(--light-gray);
                `
            } else {
                return `
                    display: none;
                `
            }
        }
    }
`

