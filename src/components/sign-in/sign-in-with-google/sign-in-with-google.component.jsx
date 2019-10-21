import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../../custom-button/custom-button.component';

import GoogleImage from "../../../assets/icon-google-50.png";

import {googleSignInStart} from '../../../redux/user/user.actions';

import {
    GoogleIconImg,
    SignInWithGoogleDiv
    } from './sign-in-with-google.styles';


const SignInWithGoogle =({googleSignInStart}) => {

        return (
            <SignInWithGoogleDiv>

                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                    <GoogleIconImg src={GoogleImage} alt="Google logo"></GoogleIconImg>
                    <span>Sign in with Google</span>
                </CustomButton>
                
            </SignInWithGoogleDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithGoogle);