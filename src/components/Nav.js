import NavMenu from "./NavMenu"
import NavLogo from "./NavLogo"
import { StyledNav, Container, Bars } from "./styles/Nav.styled"
import { useState } from "react"

export default function Nav() {

    const [display, setDisplay] = useState(false)

    const toggleNav = () => {
        setDisplay(!display)
    }

    return (
        <StyledNav>
            <Container>
                <Bars onClick={toggleNav}></Bars>
                <NavLogo></NavLogo>
                <NavMenu boolean={display ? true : false}/>
            </Container>
        </StyledNav>
    )
}
