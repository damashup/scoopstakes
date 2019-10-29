import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../../../../page-elements/button/custom-button/custom-button.component';

import GitHubImage from "../../../../../assets/github-icon.png";

import {githubSignInStart} from '../../../../../redux/user/actions/sign-in/start/with-github/github-sign-in-start.action';

import {
    GitHubIconImg,
    SignInWithGitHubDiv
    } from './sign-in-with-github.styles';


const SignInWithGitHub =({githubSignInStart}) => {

        return (
            <SignInWithGitHubDiv>

                <CustomButton type='button' onClick={githubSignInStart} isGitHubSignIn>
                    <GitHubIconImg src={GitHubImage} alt="Github logo"></GitHubIconImg>
                    <span>Sign in with GitHub</span>
                </CustomButton>
                
            </SignInWithGitHubDiv>
        )
}

const mapDispatchToProps = dispatch => ({
    githubSignInStart: () => dispatch(githubSignInStart())
});

export default connect(null, mapDispatchToProps)(SignInWithGitHub);