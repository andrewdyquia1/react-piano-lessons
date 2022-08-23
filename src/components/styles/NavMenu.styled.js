import styled from "styled-components";

export const StyledNavMenu = styled.ul`
    ${props => {
        if(props.toggle){
            return `
            display: block;
            font-family: 'Roboto';
            position: absolute;
            z-index: 100;
            top: 70px;
            width: 100%;
            background-color: var(--gray);
            text-align: center;
            font-size: 2rem;
            line-height: 4rem;
            list-style:none;
            @media(min-width: 760px){
                all:unset;
            }    
            `;
        } else {
            return `
            display: none;
            `;
        }
    }}

        @media(min-width:760px){
            display: flex;
            align-items: center;
            height: 100%;
            font-family: "Roboto";
            list-style: none;

            & > li{
            margin-left: 30px;
            }
        }
            
`;