import LeaderboardActionTypes from '../types/leaderboard.types';


const INITIAL_STATE = {
    leaderboardType: 'round',
    selectedRound: '1819-69',
    latestRoundNumber: '1819-69',
    selectedSeason: '1819',
    latestSeasonNumber: '1819',
    numberId: null
};

const leaderboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case LeaderboardActionTypes.SELECT_ROUND_LEADERBOARD_START:  
            return {
                ...state,
                leaderboardType: 'round',
                selectedRound: action.payload
            };
        
        case LeaderboardActionTypes.SELECT_SEASON_LEADERBOARD_START:  
            return {
                ...state,
                leaderboardType: 'season',
                selectedSeason: action.payload
            }; 
        
        case LeaderboardActionTypes.SET_SELECTED_ROUND: 
            return {
                ...state,
                selectedRound: action.payload,
                selectedSeason: INITIAL_STATE.latestSeasonNumber
            }; 
        
        case LeaderboardActionTypes.SET_SELECTED_SEASON: 
            return {
                ...state,
                selectedSeason: action.payload,
                selectedRound: INITIAL_STATE.latestRoundNumber
            }; 

        default:
            return state

    }
};

export default leaderboardReducer;