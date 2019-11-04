import React from 'react'
import PageTitle from '../../page-elements/page-title/page-title.component';

import {ResultsPageDiv, ResultsTitle, ResultsSummary} from './results.styles'
import NextRoundContainer from '../../app/round/next/next-round.container'
import LastCompletedRoundContainer from '../../app/round/last-completed/last-completed-round.container';

const ResultsPage = () => {
    const title = 'Results and Schedule';
    const entrant = 'nanzo-scoop'
    return (
        <ResultsPageDiv>

            <ResultsTitle>
                <PageTitle title={title} />
                
            </ResultsTitle>

            <ResultsSummary>
                <NextRoundContainer summary/>
                <LastCompletedRoundContainer singleResultSummary entrant={entrant}/>
            </ResultsSummary>    
        </ResultsPageDiv>
    )
}

export default ResultsPage;
