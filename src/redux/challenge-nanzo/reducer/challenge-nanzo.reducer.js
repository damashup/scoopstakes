import ChallengeNanzoActionType from '../types/challenge-nanzo.types';

const INITIAL_STATE = {
    roundNumber: null,
};

const challengeNanzoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case ChallengeNanzoActionType.SET_ROUND_NUMBER :  
            return {
                ...state,
                roundNumber: action.payload,
            };

        default:
            return state

    }
};

export default challengeNanzoReducer;