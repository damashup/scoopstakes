import styled, {css} from 'styled-components';

import {
        emailSignInStyles,
        facebookSignInStyles, 
        githubSignInStyles, 
        googleSignInStyles, 
        twitterSignInStyles
        } from './sign-in-button-styles/sign-in-button.styles'

import {signUpStyles} from './sign-up-button-styles/sign-up-button-styles';

import {signInMethodsStyles} from './login-management-styles/login-management.styles';

import {leaderboardSelectorStyles} from './leaderboard-styles/leaderboard-selector.styles';

import {
        buttonVanilla,
        colorBlack
        } from '../../../page-styles/base-styles';


const getBespokeButtonStyles = props => {
    // Sign In Button properties 
    if(props.isGoogleSignIn){return googleSignInStyles;}
    if(props.isFacebookSignIn){return facebookSignInStyles;}
    if(props.isGitHubSignIn){return githubSignInStyles;}
    if(props.isTwitterSignIn){return twitterSignInStyles;}
    if(props.isEmailSignIn){return emailSignInStyles;}
    // Sign up Button propertes
    if(props.signup){return signUpStyles}
    // Login Mangement Buttonproperties:
    if(props.signInMethods){return signInMethodsStyles;}
    // LeaderboardSelector
    if(props.leaderboardSelector){return leaderboardSelectorStyles}
    // Default
    return vanillaStyles;
}        

// Default styles
const vanillaStyles = css`
    ${buttonVanilla}
    line-height: 50px;
    border-radius: 10px;
`;

// Common Styles
export const CustomButtonDiv = styled.button`
    width: auto;
    margin: auto;
    letter-spacing: 0.5px;
    padding: 0 2rem 0 2rem;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    border: 1px solid ${colorBlack};

    display: flex;
    align-items: center;
    
    ${getBespokeButtonStyles}

`;