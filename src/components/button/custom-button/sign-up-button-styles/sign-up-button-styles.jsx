import {css} from 'styled-components';

import {
        colorGoogleGreen, 
        colorGoogleGreenShade,
        } from '../../../page-template/styles/base-styles';
     


export const signUpStyles = css`
    justify-content: center;
    background-color: ${colorGoogleGreen};
    color: white
    &:hover {
        background-color: ${colorGoogleGreenShade};
    }
`;
