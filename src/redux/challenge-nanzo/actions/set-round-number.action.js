import ChallengeNanzoActionTypes from '../types/challenge-nanzo.types';

export const setRoundNumber = roundNumber => ({
    type: ChallengeNanzoActionTypes.SET_ROUND_NUMBER,
    payload: roundNumber
});