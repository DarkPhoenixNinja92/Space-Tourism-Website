import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"
import Logo from '../images/shared/logo.svg';
import './Header.css';

const Header = () => {
    return(
            <Navbar className="nav" dark color = 'primary' sticky = 'top'>
                <NavbarBrand href="/">
                <img className='icon' src= {Logo}/>
                </NavbarBrand>
                <Nav>
                <NavLink className="linkItm" href="/"><NavItem className="navitm menu-itm home current">00 Home</NavItem></NavLink>
                <NavLink className="linkItm"><NavItem className="navitm menu-itm inactive destination">01 Destination</NavItem></NavLink>
                <NavLink className="linkItm"><NavItem className="navitm menu-itm inactive crew">02 Crew</NavItem></NavLink>
                <NavLink className="linkItm"><NavItem className="navitm menu-itm inactive technology">03 Technology</NavItem></NavLink>
                </Nav>
            </Navbar>
    )
}

export default Header;