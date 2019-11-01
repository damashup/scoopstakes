import React from 'react';
import {connect} from 'react-redux';

import {setSelectedSeason} from '../../../../../../redux/leaderboard/actions/set-selected-season';

import '../number.scss';


const SeasonNumberSelector = ({allSeasons, setSelectedSeason}) => {

    const handleSelection = event => {
        const seasonNumber = event.target.value
        console.log(seasonNumber)
        setSelectedSeason(seasonNumber)
    }
    return (
        <div>
            <select className='select-css' onChange={handleSelection}>
                {allSeasons.map(season => (
                    <option key={season.id} value={season.year} >
                       Season {season.year}  
                    </option>
                ))}
            </select>  
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setSelectedSeason: roundNumber => dispatch(setSelectedSeason(roundNumber))
});

export default connect(null,mapDispatchToProps)(SeasonNumberSelector);
