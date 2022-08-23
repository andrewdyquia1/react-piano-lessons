import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        --dark-blue: #475B5A;
        --dark-blue-op: rgba(71, 91, 90, 0.7);
        --dark-gray: #8D8E8E;
        --gray: #A3A9AA;
        --light-gray: #BBBBBF;
        --aqua-blue: #52D1DC;

        --profile-pic-length: 250px;
        --profile-pic-length-med: 400px;
        --paragraph-width: 800px;
        --paragraph-height: 400px;
    }

    .anchor{
        text-decoration: none;
        color: #000;
        transition: color 200ms;
    
        &:hover{
            color: var(--dark-blue);
        }
    }

    .header-one{
        font-size: 1rem;

        @media(min-width: 500px){
            font-size: 1.5rem;
        }
    }

    .header-two{
        font-size: 2rem; 
    }

    h2{
        font-size: 2rem;
        padding-bottom: 15px;
    }

    .header-three{
        font-size: 1.5rem;
    }

    .paragraph{
        font-size: 1rem;

        @media(min-width: 600px){
            font-size: 1.25rem;
        }
        
    }
`