import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectLatestSeason} from '../../../../../../redux/season/selectors/select-latest-season';
import {setSelectedRound} from '../../../../../../redux/leaderboard/actions/set-selected-round';

import '../number.scss';

const RoundNumberSelector = ({allRounds, latestSeason, setSelectedRound}) => {

    const handleSelection = event => {
        const roundNumber = event.target.value
        setSelectedRound(roundNumber)
    }

    return (
        <div>
            <select className='select-css' onChange={handleSelection}>
                {allRounds.map(round => (
                    <option key={round.id} value={round.uid} >
                       {(round.season === latestSeason) 
                        ? `Round ${round.round_no}` 
                        : `Season ${round.season} Round ${round.round_no}` }  
                    </option>
                )
                )}
            </select>  
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    latestSeason: selectLatestSeason
});

const mapDispatchToProps = dispatch => ({
    setSelectedRound: roundNumber => dispatch(setSelectedRound(roundNumber))
});


export default connect(mapStateToProps,mapDispatchToProps)(RoundNumberSelector);

// class RoundNumberSelector extends React.Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             selectedOption: 'SelectRound'
//         }
//     this.handleChange = this.handleChange.bind(this);
//     }
//   handleChange(event){
//     console.log(event.target.value);
//     this.setState({selectedOption:event.target.value});
//   }
//   render() {
//           return (
//         <div>
//             <select className='select-css' value={this.state.selectedOption} onChange={this.handleChange}>
//                 <option value={'SelectRound'}>Select round</option>
//                 {this.props.allRounds.map(round => (
//                     <option key={round.id} value={round.round_no} >
//                        {(round.season === this.props.latestSeason) ? `Round ${round.round_no}` : `Season ${round.season} Round ${round.round_no}` }  
//                     </option>
//                 )
//                 )}
//             </select>  
//         </div>
//     )
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(RoundNumberSelector);

