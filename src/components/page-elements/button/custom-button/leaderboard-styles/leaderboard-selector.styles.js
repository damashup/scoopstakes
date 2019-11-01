import {css} from 'styled-components';


import {
        buttonVanilla,
        colorGreyLight3,
        colorGreyDark3,
        buttonDisabled
        } from '../../../../page-styles/base-styles';


const getLeaderboardStatus = props => {
    if(props.isSelected){return leaderboardIsSelected;}
    return defaultStyle;
}                

export const leaderboardSelectorStyles = css`
    line-height: 30px;
    width: 150px;
    justify-content: center;
    text-transform: capitalize;
    ${getLeaderboardStatus}
`; 

const leaderboardIsSelected = css`
    ${buttonVanilla}
`;

const defaultStyle = css`
    ${buttonDisabled}
    &:hover {
        background-color: ${colorGreyLight3};
        color: ${colorGreyDark3}
    }
`;