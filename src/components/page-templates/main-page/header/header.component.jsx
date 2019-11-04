import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


// import currentUser
import {selectCurrentUser} from '../../../../redux/user/selectors/user.selectors';
import {signOutStart} from '../../../../redux/user/actions/sign-out/start/sign-out-start.action';

import {
  HeaderDiv,
  HeaderLogo,
  HeaderLogoLink,
  SignInLink,
  SignOutDiv,
  SignOutLink,
  WelcomeUserSpan
  } from './header.styles';

const Header = ({currentUser, signOutStart}) => {

    return (
      <HeaderDiv>
        <HeaderLogoLink to='/'>
          <HeaderLogo /> 
        </HeaderLogoLink>
        {currentUser 
          ?
          <SignOutDiv>
            <WelcomeUserSpan>Welcome, {currentUser.displayName}</WelcomeUserSpan>
            <SignOutLink to='/' onClick={signOutStart}>Sign out</SignOutLink> 
          </SignOutDiv> 
          
          : 
          <SignInLink to='/signin'>SIGN IN </SignInLink>}
      </HeaderDiv>
      )
  
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
