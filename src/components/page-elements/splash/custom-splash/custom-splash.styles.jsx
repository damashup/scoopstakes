import styled, {css} from 'styled-components';
import {colorPrimaryDark, colorGreyLight3, colorWhite, gradientDarkBlue, blendMode1} from '../../../page-styles/base-styles';


const vanillaStyles = css`
    background-color: ${colorPrimaryDark};
    color: ${colorGreyLight3};
`;

const joinStyles = css`
    grid-column: 2/ span 2;
    grid-row: 1 / span 1;
    color: ${colorGreyLight3};
    text-transform: uppercase;
    background-size: cover;
    background-position: center;
    background-blend-mode: ${blendMode1};
    //background-image: linear-gradient(to left bottom, ${gradientDarkBlue}, url(https://nanzoscoop.com/img/nanzo_babypicToon.jpg)
    background-image: linear-gradient(to left bottom, ${gradientDarkBlue}, url(https://cdn.pixabay.com/photo/2013/07/03/13/27/football-142952_960_720.jpg)
    
`;

const howtoStyles = css`
    grid-column: 2/ span 2;
    grid-row: 3 / span 1;
    background-color: ${colorWhite};
`;


const patreonStyles = css`
    padding: 6rem;
    background-size: cover;
    background-position: center;
    background-blend-mode: ${blendMode1};
    //background-image: linear-gradient(to left bottom, ${gradientDarkBlue}, url(../../assets/Patreon_Navy.png)
    background-image: linear-gradient(to left bottom, ${gradientDarkBlue}, url(https://c5.patreon.com/external/logo/guidelines/wordmark_on_navy.jpg)
`;


const getSplashStyles = props => {

    if(props.join){return joinStyles;}

    if(props.howto){return howtoStyles;}

    if(props.patreon){return patreonStyles;}

    return vanillaStyles;

}

export const CustomSplashContainer = styled.div`

    
    font-weight: bold;
    font-size: 400%;

    display: flex
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    

    ${getSplashStyles}

`;