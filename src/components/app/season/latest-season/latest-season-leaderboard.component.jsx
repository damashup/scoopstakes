import React from 'react'

import OverallLeadersboardContainer from '../../leaderboard/overall/overall-leaderboard.container'

import {
    LatestSeasonLeaderboardContainer,
    LatestSeasonLeaderboardHeader,

    } from './latest-season-leaderboard.styles';

const LatestSeasonLeaderboard = ({season}) => {
    console.log(season);
    const seasonId = season[0].year;
    console.log(seasonId);
       
    return (
        <LatestSeasonLeaderboardContainer>
            <LatestSeasonLeaderboardHeader><div> Points Leaders (for Season)</div>        
            </LatestSeasonLeaderboardHeader>
                <OverallLeadersboardContainer seasonId={seasonId} />
            </LatestSeasonLeaderboardContainer>

            
    )
}

export default LatestSeasonLeaderboard;
