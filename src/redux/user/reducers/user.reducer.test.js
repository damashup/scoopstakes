import UserActionTypes from '../types/user.types';
import userReducer from './user.reducer';

const INTIAL_STATE = {
    currentUser: null, 
    isFetching: false, 
    error: null,
    providers: null
};

describe('userReducers - undefined reducer', () => {
    it('should return the initial state (with undefined)', () => {
        expect(userReducer(undefined, {})).
        toEqual({
            currentUser: null, 
            isFetching: false, 
            error: null,
            providers: null
        })
    })
})

describe('userReducers - SIGN_IN_SUCCESS reducer', () => {
    const STATE1 = INTIAL_STATE
    const STATE2 = {currentUser: null, isFetching: true, error: null, providers: null} 
    const ACTION1 = {type: UserActionTypes.SIGN_IN_SUCCESS, payload: {displayName: 'Nanzo'}}

    it('should handle SIGN_IN_SUCCESS action', () => {expect(userReducer(STATE1, ACTION1)).
        toEqual({currentUser: ACTION1.payload, isFetching: false, error: null, providers: null})})

    it('should handle SIGN_IN_SUCCESS action (update fetching)', () => {expect(userReducer(STATE2, ACTION1))
        .toEqual({currentUser: {displayName: 'Nanzo'}, isFetching: false,error: null, providers: null})})
})

describe('userReducers - SIGN_OUT_SUCCESS reducer', () => {
    const STATE1 = {currentUser: {displayName: 'Nanzo'}, isFetching: false, error: null, providers: null}
    const STATE2 = {currentUser: {displayName: 'Nanzo'}, isFetching: true, error: null, providers: null} 
    const ACTION1 = {type: UserActionTypes.SIGN_OUT_SUCCESS}

    it('should handle SIGN_OUT_SUCCESS action', () => {expect(userReducer(STATE1, ACTION1)).
        toEqual(INTIAL_STATE)})

    it('should handle SIGN_OUT_SUCCESS action (update fetching)', () => {expect(userReducer(STATE2, ACTION1))
        .toEqual({currentUser: null, isFetching: false,error: null, providers: null})})
})

describe('userReducers - SIGN_IN_FAILURE reducer', () => {
    const STATE1 = INTIAL_STATE
    const STATE2 = {currentUser: {displayName: 'Nanzo'}, isFetching: true, error: null, providers: null} 
    const ACTION1 = {type: UserActionTypes.SIGN_IN_FAILURE, payload: 'Cannot retrieve sign in data'}

    it('should handle SIGN_IN_FAILURE action', () => {expect(userReducer(STATE1, ACTION1)).
        toEqual({currentUser: STATE1.currentUser, isFetching: false, error: ACTION1.payload, providers: null})})

    it('should handle SIGN_IN_FAILURE action (update fetching)', () => {expect(userReducer(STATE2, ACTION1))
        .toEqual({currentUser: STATE2.currentUser, isFetching: false, error: ACTION1.payload, providers: null})})
})

describe('userReducers - SIGN_UP_FAILURE reducer', () => {
    const STATE1 = INTIAL_STATE
    const STATE2 = {currentUser: {displayName: 'Nanzo'}, isFetching: true, error: null, providers: null} 
    const ACTION1 = {type: UserActionTypes.SIGN_UP_FAILURE, payload: 'Cannot retrieve sign up data'}

    it('should handle SIGN_UP_FAILURE action', () => {expect(userReducer(STATE1, ACTION1)).
        toEqual({currentUser: STATE1.currentUser, isFetching: false, error: ACTION1.payload, providers: null})})

    it('should handle SIGN_UP_FAILURE action (update fetching)', () => {expect(userReducer(STATE2, ACTION1))
        .toEqual({currentUser: STATE2.currentUser, isFetching: false, error: ACTION1.payload, providers: null})})
})

describe('userReducers - SIGN_OUT_FAILURE reducer', () => {
    const STATE1 = INTIAL_STATE
    const STATE2 = {currentUser: {displayName: 'Nanzo'}, isFetching: true, error: null, providers: null} 
    const ACTION1 = {type: UserActionTypes.SIGN_OUT_FAILURE, payload: 'Cannot retrieve sign up data'}

    it('should handle SIGN_OUT_FAILURE action', () => {expect(userReducer(STATE1, ACTION1)).
        toEqual({currentUser: STATE1.currentUser, isFetching: false, error: ACTION1.payload, providers: null})})

    it('should handle SIGN_OUT_FAILURE action (update fetching)', () => {expect(userReducer(STATE2, ACTION1))
        .toEqual({currentUser: STATE2.currentUser, isFetching: false, error: ACTION1.payload, providers: null})})
})
