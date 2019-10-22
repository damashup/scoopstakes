import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../../button/custom-button/custom-button.component';

import FacebookImage from "../../../assets/facebook-icon.png";

import {facebookSignInStart} from '../../../redux/user/user.actions';

import {
    FacebookIconImg,
    SignInWithFacebookDiv
    } from './sign-in-with-facebook.styles';


const SignInWithFacebook =({facebookSignInStart}) => {

        return (
            <SignInWithFacebookDiv>

                <CustomButton type='button' onClick={facebookSignInStart} isFacebookSignIn>
                    <FacebookIconImg src={FacebookImage} alt="Facebook logo"></FacebookIconImg>
                    <span>Sign in with Facebook</span>
                </CustomButton>
                
            </SignInWithFacebookDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    facebookSignInStart: () => dispatch(facebookSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithFacebook);