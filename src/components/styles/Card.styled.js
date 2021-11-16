import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 65vw;
    padding: 10px;
    background: var(--light-gray);
    text-align: center;
    box-shadow: 8px 0px 20px var(--dark-blue);
    
    
    @media(min-width: 1200px){
        width: 350px; 
    }
`

export const PriceContainer = styled.div`
`
export const CardHeaderTwo = styled.h2`
    width: 150px;
    margin: 0 auto;
    font-size: 5rem;
    position: relative;
    color: #000;
    @media(min-width: 850px){
        font-size: 5rem;
    }
`

export const PerHour = styled.div`
    font-size: 0.7rem;
    color: #000;
    position: absolute; 
    bottom: 16px; 
    right:-27px;
    font-weight:400;

    @media(min-width: 768px){
        font-size: 0.8rem;
        right:-40px;
    }
`

export const CommentContainer = styled.ul`
    text-align: start;
    width: 60%;
    margin: 0 auto;

    & > *:not(:last-child){
        margin-bottom: 5px;
    }   
`