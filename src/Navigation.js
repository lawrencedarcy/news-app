import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Navigation.css';
import Masthead from './Masthead';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewsContainer from './NewsContainer';
import SportsContainer from './SportsContainer'

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Router>
      <div>
        <Navbar dark expand='md' className='Navigation'>
          <Masthead />

          <NavbarToggler onClick={toggleNavbar} className='mr-2' />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
             {/*  <NavItem>
                <NavLink to='/' className='menu-item' >
                  News
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/sport' className='menu-item'  render={SportsContainer}>
                  Sport
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/' className='menu-item'>
                  Business
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/' className='menu-item'>
                  Lifestyle
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <Switch>
        <Route path='/Sport'>
          
        </Route>
        <Route path='/Business'>
         
        </Route>
        <Route path='/'>
       
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
