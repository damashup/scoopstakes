import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../../../button/custom-button/custom-button.component';

import TwitterImage from "../../../../assets/twitter-icon-2.png";

import {twitterSignInStart} from '../../../../redux/user/actions/sign-in/start/with-twitter/twitter-sign-in-start.action';

import {
    TwitterIconImg,
    SignInWithTwitterDiv
    } from './sign-in-with-twitter.styles';


const SignInWithTwitter =({twitterSignInStart}) => {

        return (
            <SignInWithTwitterDiv>

                <CustomButton type='button' onClick={twitterSignInStart} isTwitterSignIn>
                    <TwitterIconImg src={TwitterImage} alt="Twitter logo"></TwitterIconImg>
                    <span>Sign in with Twitter</span>
                </CustomButton>
                
            </SignInWithTwitterDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    twitterSignInStart: () => dispatch(twitterSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithTwitter);