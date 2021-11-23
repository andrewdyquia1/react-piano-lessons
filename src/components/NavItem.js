export default function NavItem( { href, name, func } ) {
    return (
        <li>
           <a className='anchor' onClick={func} href={href}>{name}</a>
        </li>
    )
}