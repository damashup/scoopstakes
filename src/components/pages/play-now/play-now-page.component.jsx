import React from "react";

import CustomSplash from '../../page-elements/splash/custom-splash/custom-splash.component';
import LastCompletedRoundContainer from '../../app/round/last-completed/last-completed-round.container';
import LatestSeasonContainer from '../../app/season/latest-season/latest-season.container';
import NextRoundContainer from '../../app/round/next-round/next-round.container';



import {
  PatreonLink,
  PlayNowContainer,
  PlayNowLatestSeasonLeaderboardGrid,
  PlayNowNextRoundGrid,
  PlayNowNextRoundSummaryGrid,
  PlayNowPatreonGrid
  } from './play-now-page.styles';


const PlayNowPage = () => {

    return (
      <PlayNowContainer>

        <PlayNowNextRoundSummaryGrid>
            <NextRoundContainer summary/>
        </PlayNowNextRoundSummaryGrid>
        

        <CustomSplash join>
          <PatreonLink>Join</PatreonLink><div>Predict <br />Win Crypto </div>
        </CustomSplash>

        <PlayNowNextRoundGrid>
            <NextRoundContainer />
        </PlayNowNextRoundGrid>

        <LastCompletedRoundContainer />

        <PlayNowLatestSeasonLeaderboardGrid>  
          <LatestSeasonContainer />
        </PlayNowLatestSeasonLeaderboardGrid>
        

        <CustomSplash howto>
          How to play
        </CustomSplash>

        <PlayNowPatreonGrid>
          <CustomSplash patreon>&nbsp;</CustomSplash>
        </PlayNowPatreonGrid>

      </PlayNowContainer>
    );
}

export default PlayNowPage;
