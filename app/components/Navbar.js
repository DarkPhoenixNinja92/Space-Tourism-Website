"use client";

import { useState } from "react";

const Navbar = () => {
    const xPathVal = ['m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z', 'M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z'];
    const [navClass, setNavClass] = useState('');
    const [menuIco, setMenuIco] = useState('http://www.w3.org/2000/svg');
    const [fillColor, setFillColor] = useState('#FFF');
    return (
        <nav className={navClass}>
            <svg onClick={() => {setNavClass('nav-hide'); setMenuIco('http://www.w3.org/2000/svg'); setFillColor('#000')}} className="nav-control" width="32" height="31" xmlns='http://www.w3.org/2000/svg'><g fill={fillColor} fillRule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
            <ul className="nav-list">
                <li className="nav-itm"><a className="nav-link" href=""><span>00</span> Home</a></li>
                <li className="nav-itm"><a className="nav-link" href=""><span>01</span> Destination</a></li>
                <li className="nav-itm"><a className="nav-link" href=""><span>02</span> Crew</a></li>
                <li className="nav-itm"><a className="nav-link" href=""><span>03</span> Technology</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;