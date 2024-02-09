"use client";

import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    }

    return (
        <div>
            <svg onClick={toggleMenu} className={`nav-control ${!isOpen ? "nav-hide" : ""}`} width="32" height="31" xmlns='http://www.w3.org/2000/svg'><g fill='#fff' fillRule="evenodd"><path d={isOpen ? "m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" : "M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"}/><path d= {isOpen ? "M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" : ""}/></g></svg>
            <nav className={`navbar ${!isOpen ? 'nav-hide' : ""} ${!isOpen ? "navbar-hide" : ""}`}>
                <ul className="nav-list">
                    <li className="nav-itm"><a className="nav-link" href=""><span>00</span> Home</a></li>
                    <li className="nav-itm"><a className="nav-link" href=""><span>01</span> Destination</a></li>
                    <li className="nav-itm"><a className="nav-link" href=""><span>02</span> Crew</a></li>
                    <li className="nav-itm"><a className="nav-link" href=""><span>03</span> Technology</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;