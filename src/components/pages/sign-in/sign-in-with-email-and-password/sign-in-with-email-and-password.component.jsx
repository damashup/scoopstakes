import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../../../page-elements/form/form-input/form-input.component";
import CustomButton from "../../../page-elements/button/custom-button/custom-button.component";

import { emailSignInStart } from "../../../../redux/user/actions/sign-in/start/with-email/email-sign-in-start.action";

import {
  SignInTextDiv,
  SignInWithEmailPasswordDiv,
  SignInWithEmailPasswordHeading,
  SignUpLink
} from "./sign-in-with-email-and-password.styles";

const SignInWithEmailPassword = ({ emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInWithEmailPasswordDiv>
      <SignInWithEmailPasswordHeading>
        Already have an account?
      </SignInWithEmailPasswordHeading>
      <SignInTextDiv>Sign in with your email and password</SignInTextDiv>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <CustomButton type="submit" isEmailSignIn>Sign in</CustomButton>
      </form>

      <SignInTextDiv>
        Don't have an account? <SignUpLink to="/signup">Sign-up</SignUpLink>
      </SignInTextDiv>
    </SignInWithEmailPasswordDiv>
  );
};

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignInWithEmailPassword);
