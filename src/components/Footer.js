import { ContactContainer, FlexContainer, Phone, Email, Span, StyledFooter, Copyright } from "./styles/Footer.styled"

export default function Footer() {
    return (
        <StyledFooter id='contact'>
            <FlexContainer>
                <ContactContainer>
                    <Span>Call or Text: <a href="tel:7143102211">(714)310-2211</a></Span>
                    <Span>Email: <a href="mailto:andrewdyquia.93@gmail.com">andrewdyquia.93@gmail.com</a></Span>
                </ContactContainer>
                <Copyright>&copy; 2021 Andrew Dyquiangco</Copyright>
            </FlexContainer>
        </StyledFooter>
    )
}
