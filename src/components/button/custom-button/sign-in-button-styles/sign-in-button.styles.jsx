import {css} from 'styled-components';

import {
        colorBlack,
        colorGreyLight1, 
        colorGoogleRedDark, 
        colorGoogleRedShade, 
        colorFacebookBlueDark,
        colorFacebookBlueShade,
        colorTwitterBlue,
        colorTwitterBlueShade,
        colorWhite
        } from '../../../page-template/styles/base-styles';  


export const facebookSignInStyles = css`
    background-color: ${colorFacebookBlueShade};
    color: white;
    &:hover {
        background-color: ${colorFacebookBlueDark};
        border: none;
    }

`;

export const githubSignInStyles = css`
    background-color: ${colorWhite};
    color: ${colorBlack};
    
    &:hover {
        background-color: ${colorGreyLight1};
        border: 1px solid ${colorBlack};
    }

`;

export const googleSignInStyles = css`
    background-color: ${colorGoogleRedDark};
    color: white;
    &:hover {
        background-color: ${colorGoogleRedShade};
        border: none;
    }
`;


export const twitterSignInStyles = css`
    background-color: ${colorTwitterBlueShade};
    color: white;
    &:hover {
        background-color: #0077B5;
        border: 1px solid ${colorTwitterBlue};
    }

`;

