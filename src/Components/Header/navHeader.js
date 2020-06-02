import React, { useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './header.css';

//map of all links/pages of application
const links = [
    {href: '/', text: 'Pro Finish Nails'},
    {href: '/about', text: 'About'},
    {href: '/contact', text: 'Contact'},
    {href: '/services', text: 'Services'},
    {href: '/blog', text: 'Blog'},
    {href: '/booking', text: "Booking"}
];


const NavHeader = (props) => {

    const [collapsed, setCollapsed] = useState (true);
    const toggleNavbar = () => setCollapsed (!collapsed);

    return(
        <>
        <div>
            <Navbar color = "faded" light>
                <NavbarBrand href="/">Pro Finish Nails</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar}/>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        {links.map(createNavItem)}
                    </Nav>
                </Collapse>
            </Navbar>        
        </div>
        </>
    );
}

//creates the links or NavLinks to other pages
const createNavItem = ({href, text}) => (
    <NavItem>
        <NavLink href = {href}>{text}</NavLink>
        </NavItem>
);


export default NavHeader;
