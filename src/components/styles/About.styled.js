import styled from 'styled-components';

export const StyledAbout = styled.section`
    background: var(--dark-blue);
    padding: 100px 60px;
    font-family: 'roboto';
`
export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    @media(min-width: 1200px){
        flex-direction: row;
        justify-content: space-around;
    }
`
export const ImgContainer = styled.div`
    position: relative;
    z-index: 12;
    margin-bottom: 125px;
    width: var(--profile-pic-length);
    height: var(--profile-pic-length);

    &::before {
            content: ' ';
            position: absolute;
            top: 10%;
            right: 3%;
            border: 5px solid var(--aqua-blue);
            height: 100%;
            width: 100%;
            z-index: 11;
        }

    @media(min-width: 600px){
        width: var(--profile-pic-length-med);
        height: var(--profile-pic-length-med);
    }   
     
    @media(min-width: 1200px){
        margin: 0;
    }
`
export const ProfileImg = styled.img`
    width: var(--profile-pic-length);
    height: var(--profile-pic-length);
    object-fit: cover;
    object-position: top;

    @media(min-width: 600px){
        width: var(--profile-pic-length-med);
        height: var(--profile-pic-length-med);
    }
    //background styling styles
    position: relative;
    z-index: 12;
`
export const ParagraphContainer = styled.div`
    position: relative;
    width: 75vw;
    z-index: 10;
    &::before {
            content: ' ';
            position: absolute;
            top: 10%;
            right: 3%;
            border: 5px solid var(--aqua-blue);
            height: 100%;
            width: 100%;
            z-index: 1;
        }

    @media(min-width: 800px){
        max-width: 600px;
    }
`
export const AboutParagraph = styled.p`
    padding: 10px;
    background-color: var(--light-gray);
    line-height: 1.5;

    //background styling styles
    position: relative;
    z-index: 10;
`