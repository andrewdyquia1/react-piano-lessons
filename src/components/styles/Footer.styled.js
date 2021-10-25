import styled from 'styled-components';

export const StyledFooter = styled.section`
    background-color: var(--dark-gray);
    padding: 50px 20px;
    font-family: 'roboto';
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(min-width: 1000px){
        justify-content: space-between;
    }
`

export const ContactContainer = styled.div`
    & > *:not(:last-child){
        margin-right: 10px;
    }
`

export const Span = styled.span`
    display: inline-block;
`

export const Copyright = styled.p`
    margin-left:10px;
`