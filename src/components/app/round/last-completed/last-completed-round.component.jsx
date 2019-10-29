import React from 'react'

import WinnersListContainer from '../../leaderboard/winners-list/winners-list.container';
import {WinnersItemHeader} from '../../leaderboard/winners-item/winners-item.component';

import {
    DollarIcon,
    LastCompletedRoundContainer,
    LastCompletedRoundHeader,
    PotContainer
    } from './last-completed-round.styles';

const LastCompletedRound = ({lastCompletedRound}) => {
    const round_no = lastCompletedRound[0].round_no;
    const pot = lastCompletedRound[0].sbd_rewards_pot; 
    const potRounded = parseFloat(Math.round(pot * 100) / 100).toFixed(2);
    const uid = lastCompletedRound[0].uid;
       
    return (
        <LastCompletedRoundContainer>

            <LastCompletedRoundHeader>

                <div> Last Round - {round_no}</div>

                <PotContainer>
                    <DollarIcon><use xlinkHref="/sprite.svg#icon-credit" /></DollarIcon>
                    <div>{potRounded}</div>
                </PotContainer>
                
            </LastCompletedRoundHeader>
    
           <WinnersItemHeader />
           
           <WinnersListContainer roundId={uid} />


        </LastCompletedRoundContainer>

            
    )
}

export default LastCompletedRound;
