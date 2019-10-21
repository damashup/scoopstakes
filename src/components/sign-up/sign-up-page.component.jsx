import React from 'react'

import SignUpWithEmailAndPassword from './sign-up-with-email-and-password/sign-up-with-email-and-password.component';
import {SignInDividerText} from '../sign-in/sign-in-page-styles';
import SignInWithGoogle from '../sign-in/sign-in-with-google/sign-in-with-google.component';

import {
  SignUpPageDiv
  } from './sign-up-page.styles';

const SignInPage = () => {
  return (
    <SignUpPageDiv>
      <SignUpWithEmailAndPassword />
      <SignInDividerText>or</SignInDividerText>
      <SignInWithGoogle />
    </SignUpPageDiv>
  )
}

export default SignInPage;