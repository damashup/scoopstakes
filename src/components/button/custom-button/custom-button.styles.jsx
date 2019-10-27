import styled, {css} from 'styled-components';

import {facebookSignInStyles, 
        githubSignInStyles, 
        googleSignInStyles, 
        twitterSignInStyles
        } from './sign-in-button-styles/sign-in-button.styles'

import {signUpStyles} from './sign-up-button-styles/sign-up-button-styles';

import {signInMethodsStyles} from './login-management-styles/login-management.styles'

import {
        colorBlack,
        colorPrimary, 
        colorPrimaryShade,
        } from '../../page-template/styles/base-styles';


const getBespokeButtonStyles = props => {
    // Sign In Button properties 
    if(props.isGoogleSignIn){return googleSignInStyles;}
    if(props.isFacebookSignIn){return facebookSignInStyles;}
    if(props.isGitHubSignIn){return githubSignInStyles;}
    if(props.isTwitterSignIn){return twitterSignInStyles;}
    // Sign up Button propertes
    if(props.signup){return signUpStyles}
    // Login Mangement Buttonproperties:
    if(props.signInMethods){return signInMethodsStyles;}
    // Default
    return vanillaStyles;
}        

// Default styles
const vanillaStyles = css`
    justify-content: center;
    background-color: ${colorPrimary};
    color: white;
    &:hover {
        background-color: ${colorPrimaryShade};
        border: 1px solid ${colorPrimaryShade};
      }
`;

// Common Styles
export const CustomButtonDiv = styled.button`
    min-width: 275px;
    width: auto;
    margin: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 2rem 0 2rem;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${colorBlack};

    display: flex;
    align-items: center;
    
    ${getBespokeButtonStyles}

`;