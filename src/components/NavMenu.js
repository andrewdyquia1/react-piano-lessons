import NavItem from "./NavItem.js"
import { StyledNavMenu } from "./styles/NavMenu.styled"

export default function NavMenu( {boolean} ) {

    return (
        <StyledNavMenu toggle={boolean} className='nav-active'>
            <NavItem href='#services' name='Services'/>            
            <NavItem href='#about' name='About'/>            
            <NavItem href='#faq' name='FAQ'/>            
            <NavItem href='#contact' name='Contact'/>            
        </StyledNavMenu>
    )
}