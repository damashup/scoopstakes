import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PageTitle from '../../page-elements/page-title/page-title.component';
import PageNotice from '../../page-elements/page-notice/page-notice.component';

import {
        LeaderboardsDiv,
        LeaderboardsNotice,
        LeaderboardsPageDiv,
        LeaderboardsTitle,
        LeaderboardsSearch,
        Selectors
        } from './leaderboards-page.styles';

import CustomSearch from '../../page-elements/search/custom-search/custom-search.component';        

import RoundResultsContainer from "../../app/round/results/round-results.container";
import SeasonResultsContainer from "../../app/season/results/season-results.container";
import LeaderboardsSelectors from "../../app/leaderboard/selectors/leaderboard-selectors.component";
import LastCompletedRoundContainer from "../../app/round/last-completed/last-completed-round.container";

import {selectLeaderboardType} from '../../../redux/leaderboard/selectors/leaderboard.selectors';
import {selectedRound} from '../../../redux/leaderboard/selectors/leaderboard.selectors';
import {selectedSeason} from '../../../redux/leaderboard/selectors/leaderboard.selectors';

const title = 'Leaderboard';
const notice ='Only Patron Members will be eligible for Crypto rewards. Everyone can play, however join our Patreon for as little as $2 per month to enjoy crypto rewards!'

const LeaderboardsPage = ({match, selectedRound, selectedSeason, selectorType}) => {

  console.log(selectorType);
  return (
  <LeaderboardsPageDiv>

    <LeaderboardsTitle>
      <PageTitle title={title} />
    </LeaderboardsTitle>
    
    <LeaderboardsNotice>
      <PageNotice notice={notice} />
    </LeaderboardsNotice>
    
    <Selectors>
      <LeaderboardsSelectors />
    </Selectors>

    <LeaderboardsSearch>
      <CustomSearch leaderboard />
    </LeaderboardsSearch>
    
    <LeaderboardsDiv>
      {(!selectedRound && !selectedSeason) ? (<LastCompletedRoundContainer leaderboard />) : null}
      {(selectorType==='round') ? (<RoundResultsContainer roundId={selectedRound} leaderboard />) : null}
      {(selectorType==='season') ? (<SeasonResultsContainer seasonId={selectedSeason} leaderboard />) : null}
    </LeaderboardsDiv>

    
  </LeaderboardsPageDiv>
)};

const MapStateToProps = createStructuredSelector({
  selectorType: selectLeaderboardType,
  selectedRound: selectedRound,
  selectedSeason: selectedSeason
});

export default connect(MapStateToProps)(LeaderboardsPage);
