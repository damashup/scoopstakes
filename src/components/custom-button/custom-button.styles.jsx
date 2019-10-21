import styled, {css} from 'styled-components';

const vanillaStyles = css`
    background-color: black;
    color: white;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    &:hover {
        background-color: #357ae8;
        border: none;
    }

`;

const getBespokeButtonStyles = props => {

    if(props.isGoogleSignIn){return googleSignInStyles;}

    return vanillaStyles;

}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
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
    

    ${getBespokeButtonStyles}

`;