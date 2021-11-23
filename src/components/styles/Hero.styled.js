import styled from "styled-components";
import heroImg from "../../images/piano-picture.jpg";

export const StyledHero = styled.section`
    max-width: 100vw;
    min-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before{
        content: ' ';
        background-image: url(${heroImg});
        background-size: cover;
        opacity: 0.8;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
`

export const TextContainer = styled.div`
    position: relative;
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    max-width: 375px;
    background-color: var(--dark-blue-op);
    padding: 25px;

    @media(min-width: 400px){
        padding: 50px;
    }
`

export const HeroHeaderTwo = styled.h2`
    font-size: 1.75rem;

    @media(min-width: 450px){
        font-size: 2.25rem;
    }
`