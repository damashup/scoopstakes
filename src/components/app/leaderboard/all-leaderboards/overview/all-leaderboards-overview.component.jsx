import React from 'react';

import AllLeaderboardsItem, {AllLeaderboardsItemHeaders} from '../all-leaderboards-item/all-leaderboards-item.component';
import PageNotice from '../page-notice/page-notice.component';
import PageTitle from '../page-title/page-title.component';
// import RoundFilter from '../round-filter/round-filter.component';
import Searchbox from '../searchbox/searchbox.component';

import { AllLeaderboardsOverviewContainer } from './all-leaderboards-overview.styles';

const AllLeaderboardsOverview = ({ results }) => {
  // const { season, round_no } = results;

  const title = 'Leaderboard';

  return (
  
    <AllLeaderboardsOverviewContainer>

      <PageTitle 
        title={title} 
      />

      <PageNotice 
        notice='Only Patron Members will be eligible for Crypto rewards. Everyone can play, however join our Patreon for as little as $2 per month to enjoy crypto rewards!' 
      />
     
      {/* <RoundFilter 
        season={season}
        round={round_no} 
      /> */}

      <Searchbox />

      <AllLeaderboardsItemHeaders />

        {results.map(({ id, ...otherCollectionProps }) => (
      <AllLeaderboardsItem 
        key={id} 
        {...otherCollectionProps} 
      />
        ))};

    </AllLeaderboardsOverviewContainer>
  )
};



export default AllLeaderboardsOverview;


