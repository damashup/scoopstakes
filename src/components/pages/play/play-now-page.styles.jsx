import styled from 'styled-components';
import {colorPrimary, colorGreyLight1, colorWhite} from '../../page-styles/base-styles';


export const PlayNowContainer = styled.div`
    padding: 2rem;
    background-color: ${colorGreyLight1};
    display:grid;
    grid-template-columns: repeat(3, 40rem);
    grid-template-rows: repeat(4, 40vh);
    grid-gap: 3rem;
    justify-content: center;
`;

export const PlayNowNextRoundSummaryGrid = styled.div`
        grid-row: 1 / span 1;
        background-color: ${colorWhite};
        height: 100%;
`

export const PlayNowNextRoundGrid = styled.div`
        grid-row: 2 / -1;
`

export const PlayNowLatestSeasonLeaderboardGrid = styled.div`
        grid-column: 3/ span 1;
`

export const PatreonLink = styled.div`
    color: ${colorPrimary};
`;

export const PlayNowPatreonGrid = styled.div`
        grid-column: 2/ span 2;
        grid-row: 4 / span 1;
        height: 100%;
`;