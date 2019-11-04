import React from 'react'
import RoundSummary from '../../summary/round-summary.component';

import {
    NextRoundSummaryDiv
    } from '../next-round.styles';

const NextRoundSummary = ({nextRound}) => {
    const round_no = nextRound[0].round_no;
    const deadlineDate = nextRound[0].deadline_time;
    const title = 'Next Round'

    return (
    <NextRoundSummaryDiv>
        <RoundSummary title={title} deadlineDate={deadlineDate} round_no={round_no} cta/>  
    </NextRoundSummaryDiv>   
    
    )
}

export default NextRoundSummary;