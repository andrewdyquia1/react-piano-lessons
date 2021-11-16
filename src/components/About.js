import { StyledAbout, Container, ImgContainer, ProfileImg, ParagraphContainer, AboutParagraph } from  "./styles/About.styled.js"
import profilePicture from "./images/andrew-dyquiangco.jpg";
import { biography } from "../data.js"

export default function About() {
    return (
        <StyledAbout id='about'>
            <Container>
                <ImgContainer>
                    <ProfileImg src={profilePicture} alt="Teacher Andrew Dyquiangco"/>
                </ImgContainer>
                <ParagraphContainer>
                    <AboutParagraph className='paragraph'>{biography}</AboutParagraph>
                </ParagraphContainer>
            </Container>
        </StyledAbout>
    )
}
