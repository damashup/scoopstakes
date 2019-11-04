import React from 'react'

import CustomDivider from '../../page-elements/divider/custom-divider/custom-divider.component';
import SignInWithEmailAndPassword from './sign-in-with-email-and-password/sign-in-with-email-and-password.component';
import SignInWithSocial from './sign-in-with-social/sign-in-with-social';

import {
  SignInPageDiv
  } from './sign-in-page-styles';


const SignInPage = () => {
  return (
    <SignInPageDiv>
      <SignInWithEmailAndPassword />    
      <CustomDivider>or</CustomDivider>
      <SignInWithSocial />      
    </SignInPageDiv>
  )
}

export default SignInPage;

   