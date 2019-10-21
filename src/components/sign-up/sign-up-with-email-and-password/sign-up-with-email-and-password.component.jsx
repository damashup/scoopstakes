import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../../form/form-input/form-input.component';
import CustomButton from '../../button/custom-button/custom-button.component';

import {emailSignUpStart} from '../../../redux/user/user.actions'

import './sign-up-with-email-and-password.styles';

import {SignUpTextDiv,
        SignInLink,
        SignUpWithEmailPasswordDiv,
        SignUpWithEmailPasswordHeading} from './sign-up-with-email-and-password.styles';

const SignUpPage = ({emailSignUpStart}) => {
  const [userCredentials, setCredentials] = useState({displayName: '', email: '', password: '', confirmPassword: ''})

  const { displayName, email, password, confirmPassword } = userCredentials


  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    emailSignUpStart(displayName, email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({...userCredentials, [name]: value });;
  };

    return (
      <SignUpWithEmailPasswordDiv>
        <SignUpWithEmailPasswordHeading>Don't have an account?</SignUpWithEmailPasswordHeading>
        <SignUpTextDiv>Sign up with your email and password</SignUpTextDiv>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit' signup>SIGN UP</CustomButton>
        </form>

        <SignUpTextDiv>Already have an account? <SignInLink to='/signin'>Sign in</SignInLink></SignUpTextDiv>
      </SignUpWithEmailPasswordDiv>
    );
}

const mapDispatchToProps = dispatch => ({
  emailSignUpStart: (displayName, email, password) => dispatch(emailSignUpStart({displayName, email, password}))
})

export default connect(null,mapDispatchToProps)(SignUpPage);
