import styled from "styled-components";

export const StyledServiceItem = styled.div`
    font-family: 'roboto';
    padding: 30px;
    margin: 0 auto;
    margin-bottom: 30px;
    max-width: 1200px;
`

export const CardContainer = styled.div`
     padding: 25px;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;

    & > *:not(:last-child){
        margin-bottom: 30px;
    }

     @media(min-width: 875px){
         flex-direction: row;
         justify-content: space-around; 
         align-items: stretch;

         & > *:not(:last-child){
            margin-bottom: 0;
            margin-right: 10px;
        }
     }


`