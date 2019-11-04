import React from 'react'
import WinnersItem from '../winners-item/winners-item.component';

const WinnersList = ({roundResults}) => {

    const filteredResults = roundResults.filter(el => el.sbd_payout > 0);

    return (
        <div>
            {filteredResults.map(({id, ...otherResultProps}) =>(
                    <WinnersItem key={id} {...otherResultProps} />                   
                ))
            }            
        </div>
    ) 
    
};

export default WinnersList;
