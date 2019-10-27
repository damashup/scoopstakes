import {css} from 'styled-components';

export const colorBlack = css`black`;
export const colorFacebookBlue = css`#3b5998`;
export const colorFacebookBlueDark = css`#1a2742`;
export const colorFacebookBlueShade = css`#2d4473`;
export const colorGoogleBlue = css`#4285f4`;
export const colorGoogleBlueShade = css`#357ae8`;
export const colorGoogleRed = css`#DB4437`;
export const colorGoogleRedDark = css`#dd5246`;
export const colorGoogleRedShade = css`#cb3225`;
export const colorGoogleYellow = css`#F4B400`;
export const colorGoogleGreen = css`#0F9D58`;
export const colorGoogleGreenShade = css`#0c7e47`;
export const colorGreyLight1 = css`#f4f2f2`;
export const colorGreyLight2 = css`#ece9e9`;
export const colorGreyLight3 = css`#ddd6d6`;
export const colorGreyDark1 = css`#54483A`;
export const colorGreyDark2 = css`#6D5D4B`;
export const colorGreyDark3 = css`#333`;
export const colorGreyDisabled = css`#cccccc`;
export const colorGreyDisabledText = css`#666666`;
export const colorGreyDisabledBorder = css`#999999`;
export const colorPrimary = css`#0606e2`;
export const colorPrimaryShade = css`#0505c1`;
export const colorPrimaryDark = css`#02024d`;
export const colorTwitterBlue = css`#55acee`;
export const colorTwitterBlueShade = css`#1684d8`;
export const colorWhite = css`#fff;`;

export const imageSignInWith = `
    max-height: 40px;
    max-width: 40px;
    margin-right: 5px;
`;

export const linkDefault = css`
    text-decoration: none;
    cursor: pointer;
`;

export const textBig = css`
    font-size: 200%;
    font-weight: bolder;
`

export const textSmall = css`
    font-size: 50%;
    font-weight: bolder;
`
export const textMedium = css`
    font-size: 110%;
    font-weight: bolder;
`

export const buttonDisabled = css`
    opacity: 0.4;
    border: 1px solid ${colorGreyDisabledBorder};
    background-color: ${colorGreyDisabled};
    color: ${colorGreyDisabledText};
`

export const profileHeader = css`
    font-weight: bold;
    font-size: 250%;
    margin-top: 5rem;
    margin-bottom 1rem;

`;

export const profileKeyText = css`
    //font-weight: bold;
    text-transform: uppercase;
    color: ${colorGreyDark3}
`;
