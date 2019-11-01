import React from 'react';


import TeamLogoContainer from '../../team/team-logo/team-logo.container';

import {
    MatchSummaryDiv,
    TeamDiv,
    TeamTitleSpan,
    VersusDiv
    } from './match-summary.styles'


const MatchSummary = ({ homeTeam, awayTeam }) => {
    
    return (    

    <MatchSummaryDiv>    
        <TeamDiv>
            <TeamLogoContainer team={homeTeam}/>            
            <TeamTitleSpan>{homeTeam}</TeamTitleSpan>
        </TeamDiv>

        <VersusDiv>v</VersusDiv>
                
        <TeamDiv>
            <TeamLogoContainer team={awayTeam}/>                    
            <TeamTitleSpan>{awayTeam}</TeamTitleSpan>
        </TeamDiv>
    </MatchSummaryDiv>


)}

export default MatchSummary;