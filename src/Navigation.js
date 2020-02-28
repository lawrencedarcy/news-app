
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navigation.css';
import Masthead from './Masthead';


const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar dark expand="md" className="Navigation">
        <Masthead />
      
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/" className="menu-item">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="menu-item">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" className="menu-item">Sport</NavLink>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;