import React from 'react';

import {
  HeaderDiv,
  HeaderLogo,
  HeaderLogoLink,
  SignInLink
  } from './header.styles';

const Header = () => (
  <HeaderDiv>
    <HeaderLogoLink to='/'>
      <HeaderLogo />
    </HeaderLogoLink>
    <SignInLink to='/signin'>
      SIGN IN
    </SignInLink>
  </HeaderDiv>
);


export default Header;
