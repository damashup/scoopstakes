import UserActionTypes from '../../../types/user.types';
import {signOutFailure} from './sign-out-failure.action';

describe('Sign Out Failure action', () => {
    it('should create a Sign Out Failure action', () => {
        const error = 'Sign out failed!!!';
        expect(signOutFailure(error)).
        toEqual({type: UserActionTypes.SIGN_OUT_FAILURE, payload: 'Sign out failed!!!'})})
})
