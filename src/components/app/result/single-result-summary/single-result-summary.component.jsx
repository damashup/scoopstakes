import React from 'react'

import {
    SingleResultSummaryDiv,
    SingleResultSummaryHeader,
} from './single-result-summary.styles';

const SingleResultSummary = ({roundResults, round, entrant}) => {
    console.log(roundResults);
    console.log(entrant);
    const entrantRound = roundResults.filter(result => result.steem_entrant === entrant);
    console.log(entrantRound);
    console.log(round);

    return (
        <SingleResultSummaryDiv>
            <SingleResultSummaryHeader>Round {round}</SingleResultSummaryHeader>
        
  

    </SingleResultSummaryDiv>
    )
}

export default SingleResultSummary;
