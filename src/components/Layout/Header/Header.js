import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavLink = styled.li`
  margin-left: 10px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: #555;
    }
  }
`;

const SignInUpButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>MyWebsite</Logo>
        <NavLinks>
          <NavLink>
            <a href="/">Home</a>
          </NavLink>
          <NavLink>
            <a href="/about">About Us</a>
          </NavLink>
          <NavLink>
            <a href="/rules">Rules</a>
          </NavLink>
          <NavLink>
            <a href="/contact">Contact Us</a>
          </NavLink>
          <NavLink>
            <a href="/signin">Sign In/Sign Up</a>
          </NavLink>
        </NavLinks>
        <SignInUpButton>Sign In/Sign Up</SignInUpButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
