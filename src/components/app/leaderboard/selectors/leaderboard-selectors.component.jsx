import React from 'react';
import SeasonOrRoundSelector from './season-or-round/season-or-round-selector.component';
import NumberSelector from './number/number-selector.component';


const LeaderboardsSelectors = () => (
    <div>
        <SeasonOrRoundSelector />
        <NumberSelector />        
    </div>
    );

export default LeaderboardsSelectors;