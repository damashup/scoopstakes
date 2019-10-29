import React from 'react';

import WinnersItem from '../winners-item/winners-item.component';

const OverallLeadersboard = ({overallResults}) => {
    const sortedResults = overallResults

    return (
        <div>
            {sortedResults.slice(0, 4).map( (result, index) => {
                const round_position = index+1;
                const {id, entrant, total_points, total_sbd} = result;
                return (
                    <WinnersItem key={id} steem_entrant={entrant} sbd_payout={total_sbd} total_points={total_points} round_position={round_position}/>   
                  

                )})
            };
                      
        </div>
    ) 
    
};

export default OverallLeadersboard;