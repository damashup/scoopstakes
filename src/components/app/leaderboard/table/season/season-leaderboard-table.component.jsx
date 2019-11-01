import React from 'react';
import { withRouter } from 'react-router-dom';

import SeasonLeaderboardTableHeader from './season-leaderboard-table-header.component';
import SeasonLeaderboardTableItem from './season-leaderboard-table-item.component';

const SeasonLeaderboardTable = ({ season, seasonResults }) => {
  return (
    <div>
      <SeasonLeaderboardTableHeader season={season} />
      {seasonResults.map(({id, ...result}) => (<SeasonLeaderboardTableItem key={id} {...result} />))}
    </div>
)};

export default withRouter(SeasonLeaderboardTable);