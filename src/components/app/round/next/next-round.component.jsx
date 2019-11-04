import React from 'react'

import CustomButton from '../../../page-elements/button/custom-button/custom-button.component';
import MatchSummary from '../../fixtures/match-summary/match-summary.component';

import {
    NextRoundDiv,
    NextRoundCTADiv, 
    } from './next-round.styles';

const NextRound = ({nextRound}) => {
    const round_no = nextRound[0].round_no;
    const season = nextRound[0].season;
    const uid = `${season}${round_no}`;
    const games = [
                    {id: `${uid}01`, homeTeam: nextRound[0].teams[0], awayTeam: nextRound[0].teams[1]},
                    {id: `${uid}02`, homeTeam: nextRound[0].teams[2], awayTeam: nextRound[0].teams[3]},
                    {id: `${uid}03`, homeTeam: nextRound[0].teams[4], awayTeam: nextRound[0].teams[5]},
                    {id: `${uid}04`, homeTeam: nextRound[0].teams[6], awayTeam: nextRound[0].teams[7]},
                    {id: `${uid}05`, homeTeam: nextRound[0].teams[8], awayTeam: nextRound[0].teams[9]}
                    ];          
    return (
        <NextRoundDiv>
            
            {games.map(({ id, ...otherGameProps }) => (<MatchSummary key={id} {...otherGameProps} /> ))};

            <NextRoundCTADiv>
                <CustomButton cta>Play Now</CustomButton>
            </NextRoundCTADiv>    


        </NextRoundDiv>

            
    )
}

export default NextRound;
