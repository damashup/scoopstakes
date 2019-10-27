import UserActionTypes from '../../../types/user.types';
import {signInFailure} from './sign-in-failure.action';

describe('Sign In Failure action', () => {
    it('should create a Sign In Failure action', () => {
        const error = 'Sign in failed!!!';
        expect(signInFailure(error)).
        toEqual({type: UserActionTypes.SIGN_IN_FAILURE, payload: 'Sign in failed!!!'})})
})