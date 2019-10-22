import styled, {css} from 'styled-components';

import {colorPrimary, 
        colorPrimaryShade, 
        colorGoogleBlue, 
        colorGoogleBlueShade, 
        colorGoogleGreen, 
        colorGoogleGreenShade,
        colorFacebookBlue,
        colorFacebookBlueShade
        } from '../../page-template/styles/base-styles';

const vanillaStyles = css`
    background-color: ${colorPrimary};
    color: white;
    &:hover {
        background-color: ${colorPrimaryShade};
        border: 1px solid ${colorPrimaryShade};
      }
`;

const googleSignInStyles = css`
    background-color: ${colorGoogleBlue};
    color: white;
    &:hover {
        background-color: ${colorGoogleBlueShade};
        border: none;
    }
`;

const facebookSignInStyles = css`
    background-color: ${colorFacebookBlue};
    color: white;
    &:hover {
        background-color: ${colorFacebookBlueShade};
        border: none;
    }

`;

const signUpStyles = css`
    background-color: ${colorGoogleGreen};
    color: white
    &:hover {
        background-color: ${colorGoogleGreenShade};

    }
`;


const getBespokeButtonStyles = props => {

    if(props.isGoogleSignIn){return googleSignInStyles;}
    if(props.isFacebookSignIn){return facebookSignInStyles;}

    if(props.signup){return signUpStyles}

    return vanillaStyles;

}

export const CustomButtonContainer = styled.button`
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

    display: flex;
    align-items: center;
    justify-content: center;
    

    ${getBespokeButtonStyles}

`;