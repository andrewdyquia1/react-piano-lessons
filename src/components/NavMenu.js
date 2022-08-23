import NavItem from "./NavItem.js"
import { navItems } from "../data.js";
import { StyledNavMenu } from "./styles/NavMenu.styled"
export default function NavMenu( {display, func} ) {
    
    return (
        <StyledNavMenu toggle={display} className='nav-active'>
            {navItems.map((navItem) => {
            
                const id = navItems.indexOf(navItem)
                const {href, name} = navItem;
                return (
                    <NavItem key={id} func={func} href={href} name={name}></NavItem>
                )
            })}
        </StyledNavMenu>
    )
}