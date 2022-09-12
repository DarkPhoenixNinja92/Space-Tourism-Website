import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import Logo from '../images/shared/logo.svg';
import './Header.css';

const Header = () => {
    return(
        <Navbar className="nav" dark color = 'primary' sticky = 'top'>
            <NavbarBrand href="/">
            <img className='icon' src= {Logo}/>
            </NavbarBrand>
            <Nav className="navbar">
                <Link className="navitm linkItm menu-itm home current" to='/'>Home</Link>
                <Link className="navitm linkItm menu-itm destination inactive" to='/destination'>Destination</Link>
                <Link className="navitm linkItm menu-itm crew inactive" to='/crew'>Crew</Link>
                <Link className="navitm linkItm menu-itm technology inactive" to='/technology'>Technology</Link>
            </Nav>
        </Navbar>
)
}

export default Header;