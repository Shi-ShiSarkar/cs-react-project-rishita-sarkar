import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from '../../images/threebearslogo-modified.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/home' activeStyle>
          <img src={logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/about' activeStyle>
            Home
          </NavLink> */}
          <NavLink to='/ultimatebookquiz' activeStyle>
            Ultimate Book Quiz
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;