import React from 'react'

import CustomDivider from '../../page-elements/button/custom-button/custom-button.component';
import SignUpWithEmailAndPassword from './sign-up-with-email-and-password/sign-up-with-email-and-password.component';
import SignInWithSocial from '../sign-in/sign-in-with-social/sign-in-with-social';

import {
  SignUpPageDiv
  } from './sign-up-page.styles';


const SignInPage = () => {
  return (
    <SignUpPageDiv>
      <SignUpWithEmailAndPassword />
      <CustomDivider>or</CustomDivider>
      <SignInWithSocial />
    </SignUpPageDiv>
  )
}

export default SignInPage;