import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 60vw;
    max-width: 400px;
    padding: 10px;
    background: var(--light-gray);
    text-align: center;
    box-shadow: 8px 0px 20px var(--dark-blue);
    
    
    @media(min-width: 1000px){
        width: 350px; 
    }
`

export const PriceContainer = styled.div`
    padding-bottom: 15px;
`
export const CardHeaderTwo = styled.h3`
    width: 150px;
    margin: 0 auto;
    font-size: 2rem;
    position: relative;
    color: #000;
`

export const PerHour = styled.div`
    font-size: 0.65rem;
    color: #000;
    position: absolute; 
    bottom: -5px; 
    right:-40px;
    font-weight:400;
`

export const CommentContainer = styled.ul`
    text-align: start;
    width: 70%;
    margin: 0 auto;

    & > *:not(:last-child){
        margin-bottom: 5px;
    }   
`