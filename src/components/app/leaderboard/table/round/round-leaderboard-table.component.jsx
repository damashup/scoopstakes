import React from 'react';
import { withRouter } from 'react-router-dom';

import RoundLeaderboardTableHeader from './round-leaderboard-table-header.component';
import RoundLeaderboardTableItem from './round-leaderboard-table-item.component';

const RoundLeaderboardTable = ({ round, roundResults }) => {
  return (
    <div>
      <RoundLeaderboardTableHeader round={round} />
      {roundResults.map(({id, ...result}) => (<RoundLeaderboardTableItem key={id} {...result} />))}
    </div>
)};

export default withRouter(RoundLeaderboardTable);
