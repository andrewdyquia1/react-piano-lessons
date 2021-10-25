export default function NavItem( { href, name } ) {
    return (
        <div>
           <a className='anchor' href={href}> {name}</a>
        </div>
    )
}