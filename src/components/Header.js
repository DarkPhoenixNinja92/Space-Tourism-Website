import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"
import Logo from '../images/shared/logo.svg';
import './Header.css';

const Header = () => {
    return(
            <Navbar className="nav" dark color = 'primary' sticky = 'top'>
                <Nav>
                    <NavItem className="navitm"><img className='float-start' src= {Logo}/></NavItem>
                    <NavItem className="navitm">00 Home</NavItem>
                    <NavItem className="navitm">01 Destination</NavItem>
                    <NavItem className="navitm">02 Crew</NavItem>
                    <NavItem className="navitm">03 Technology</NavItem>
                </Nav>
            </Navbar>
    )
}

export default Header;