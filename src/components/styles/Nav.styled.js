import styled from "styled-components";
import { FaBars } from 'react-icons/fa';

export const StyledNav = styled.nav`
    padding: 30px 0;
    background-color: var(--gray);
    max-width: 100vw;
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-areas: '. bars . . logo logo logo logo logo logo logo logo . . . .';
    height: 100%;
    justify-items: center;
    align-items: center;

    @media(min-width: 760px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px;
    }
`

export const Bars = styled(FaBars)`
    font-size: 35px;
    cursor: pointer;

    //layout specific style
    grid-area: bars;

    @media(min-width: 760px){
        display: none;
    }
`