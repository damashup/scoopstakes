import {css} from 'styled-components';


import {
        colorGreyLight1,
        colorGreyLight3,
        colorGreyDark3,
        colorGoogleGreen, 
        colorWhite,
        buttonDisabled
        } from '../../../../page-styles/base-styles';

const getSignInMethodStatus = props => {
    // Sign In Button properties 
    if(props.isSignInMethodEnabled){return signInMethodEnabledStyles;}
    return signInMethodDisabledStyles;
}                

export const signInMethodsStyles = css`
    width: 275px;
    justify-content: center;
    text-transform: capitalize;
    ${getSignInMethodStatus}
`;

const signInMethodEnabledStyles = css`
    background-color: ${colorGoogleGreen};
    color: ${colorWhite}
    :disabled {
        ${buttonDisabled}
    }
`;

const signInMethodDisabledStyles = css`
    background-color: ${colorGreyLight3};
    color: ${colorGreyDark3}
    &:hover {
        background-color: ${colorGreyLight1};
        color: ${colorGreyDark3}
    }
`;
