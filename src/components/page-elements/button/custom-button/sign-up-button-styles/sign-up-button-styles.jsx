import {css} from 'styled-components';

import {
        signButtonWidthHeight,
        colorGoogleGreen, 
        colorGoogleGreenShade,
        } from '../../../../page-styles/base-styles';
     


export const signUpStyles = css`
    ${signButtonWidthHeight}
    justify-content: center;
    background-color: ${colorGoogleGreen};
    color: white
    &:hover {
        background-color: ${colorGoogleGreenShade};
    }
`;
