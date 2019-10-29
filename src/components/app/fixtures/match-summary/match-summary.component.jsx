import React from 'react';


import TeamLogoContainer from '../../team/team-logo/team-logo.container';

import './match-summary.styles.scss';

const MatchSummary = ({ homeTeam, awayTeam }) => {
    
    return (
    
      

    <div className="match--summary">    
        <div className='team'>
            <TeamLogoContainer team={homeTeam}/>            
            <span className="team__title">{homeTeam}</span>
        </div>

        <div className="versus">v</div>
                
        <div className='team'>
                <TeamLogoContainer team={awayTeam}/>                    
            <span className="team__title">{awayTeam}</span>
        </div>
    </div>


)}

export default MatchSummary;