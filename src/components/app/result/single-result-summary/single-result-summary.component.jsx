import React from 'react'

import VersusNanzo from './views/VersusNanzo';


const SingleResultSummary = ({roundResults, entrant, nanzoTab, roundId}) => {
    const entrantResult = roundResults.filter(result => result.steem_entrant === entrant);
    const nanzoResult = roundResults.filter(result => result.steem_entrant === 'nanzo-scoop');
 
    if(nanzoTab)return <VersusNanzo entrantResult={entrantResult[0]} nanzoResult={nanzoResult[0]} roundId={roundId}/>
    return
}

export default SingleResultSummary;
