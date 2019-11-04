import React from 'react'

import {
    SingleResultSummaryDiv,
    SingleResultSummaryHeader,
    SingleResultSummaryDetails,
    SingleResultSummaryLink,
    RoundDiv,
    RoundCTADiv,
    RoundDeadlineDate,
    RoundDeadlineTime, 
    RoundDetails, 
    RoundInfo,
    RoundNumber
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
        
        <RoundDetails>

            <RoundDeadlineDate>

            </RoundDeadlineDate>

            <RoundInfo>
            
            </RoundInfo>

        </RoundDetails>


            <RoundCTADiv>
                See Results
            </RoundCTADiv>

        
  


    </SingleResultSummaryDiv>
    )
}

export default SingleResultSummary;
