import React from 'react'

import SignInWithEmailAndPassword from './sign-in-with-email-and-password/sign-in-with-email-and-password.component';
import SignInWithGoogle from './sign-in-with-google/sign-in-with-google.component';
import SignInWithFacebook from './sign-in-with-facebook/sign-in-with-facebook.component';

import {
  SignInDividerText,
  SignInPageDiv
  } from './sign-in-page-styles';

const SignInPage = () => {
  return (
    <SignInPageDiv>

      <SignInWithEmailAndPassword />
      
      <SignInDividerText>or</SignInDividerText>
      <SignInWithGoogle />
      <SignInWithFacebook />
      
    </SignInPageDiv>
  )
}

export default SignInPage;

   