import styled from 'styled-components';
import {
    colorPrimaryDark, 
    colorWhite} from '../../../page-styles/base-styles';

export const LatestSeasonLeaderboardContainer = styled.div`
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
    background-color: ${colorWhite};
`;

        export const LatestSeasonLeaderboardHeader = styled.div`
            background-color: ${colorPrimaryDark};
            color: ${colorWhite};
            font-weight: bold;
            font-size: 2rem;
            padding: 1rem;

            display: flex;
            justify-content: space-between;
            align-items: center;
        `;

                export const PotContainer = styled.div`
                    display: flex;
                    align-items:center;
                `;

                        export const DollarIcon = styled.svg`
                        width: 2rem;
                        height: 2rem;
                        stroke-width: 0;
                        stroke: ${colorWhite};
                        fill: ${colorWhite};
                        `;



